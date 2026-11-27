import React, { useMemo, useState } from 'react';
import type { Era } from '../../data/types';
import {
  BOOKMARK_MIN,
  QUIZ_SIZE,
  buildQuizPool,
  drawQuestion,
  firstSentence,
  shuffleForDisplay,
  type QuizEvent,
} from '../../data/quizUtils';
import './Quiz.css';

interface QuizProps {
  eras: Era[];
  bookmarkedIds: ReadonlySet<string>;
}

interface Question {
  /** 시간순 정답 */
  answer: QuizEvent[];
  /** 화면에 보이는 섞인 순서 */
  display: QuizEvent[];
}

interface Stats {
  combo: number;
  best: number;
  solved: number;
  correct: number;
}

function makeQuestion(eras: Era[], scope: string, bookmarkedIds: ReadonlySet<string>): Question | null {
  const answer = drawQuestion(buildQuizPool(eras, scope, bookmarkedIds));
  return answer ? { answer, display: shuffleForDisplay(answer) } : null;
}

export const Quiz: React.FC<QuizProps> = ({ eras, bookmarkedIds }) => {
  const [scope, setScope] = useState('all');
  const [question, setQuestion] = useState<Question | null>(() => makeQuestion(eras, 'all', bookmarkedIds));
  const [picks, setPicks] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [stats, setStats] = useState<Stats>({ combo: 0, best: 0, solved: 0, correct: 0 });

  const bookmarkCount = useMemo(
    () =>
      eras.reduce(
        (sum, era) => sum + (era.cards ?? []).filter(card => bookmarkedIds.has(card.id)).length,
        0
      ),
    [eras, bookmarkedIds]
  );
  const bookmarkEnabled = bookmarkCount >= BOOKMARK_MIN;

  const loadQuestion = (nextScope: string) => {
    setQuestion(makeQuestion(eras, nextScope, bookmarkedIds));
    setPicks([]);
    setChecked(false);
  };

  const handleScopeChange = (value: string) => {
    setScope(value);
    loadQuestion(value);
  };

  const togglePick = (id: string) => {
    if (checked) return;
    setPicks(prev => {
      const index = prev.indexOf(id);
      if (index >= 0) return prev.slice(0, index); // 이 카드와 그 뒤에 고른 카드를 취소
      return prev.length < QUIZ_SIZE ? [...prev, id] : prev;
    });
  };

  const undoLast = () => {
    if (!checked) setPicks(prev => prev.slice(0, -1));
  };

  const resetPicks = () => {
    if (!checked) setPicks([]);
  };

  const checkAnswer = () => {
    if (!question || checked || picks.length !== QUIZ_SIZE) return;
    const isCorrect = picks.every((id, i) => id === question.answer[i].card.id);
    setChecked(true);
    setStats(prev => {
      const combo = isCorrect ? prev.combo + 1 : 0;
      return {
        combo,
        best: Math.max(prev.best, combo),
        solved: prev.solved + 1,
        correct: prev.correct + (isCorrect ? 1 : 0),
      };
    });
  };

  const isCorrect =
    checked && question ? picks.every((id, i) => id === question.answer[i].card.id) : false;

  return (
    <section className="quiz" aria-label="연표 순서 맞추기 퀴즈">
      <div className="quiz-top">
        <div className="quiz-scope">
          <label htmlFor="quiz-scope-select" className="quiz-scope-label">출제 범위</label>
          <select
            id="quiz-scope-select"
            className="quiz-scope-select"
            value={scope}
            onChange={(e) => handleScopeChange(e.target.value)}
          >
            <option value="all">전체 시대</option>
            <optgroup label="시대별 선택">
              {eras.map(era => (
                <option key={era.id} value={era.id}>{era.name}</option>
              ))}
            </optgroup>
            <option value="bookmarks" disabled={!bookmarkEnabled}>
              {bookmarkEnabled
                ? `내 북마크 문제만 (${bookmarkCount}개)`
                : `내 북마크 문제만 (${BOOKMARK_MIN}개 이상 필요, 현재 ${bookmarkCount}개)`}
            </option>
          </select>
        </div>

        <div className="quiz-stats" aria-live="polite">
          <span className={`quiz-stat combo ${stats.combo >= 3 ? 'hot' : ''}`}>🔥 콤보 {stats.combo}</span>
          <span className="quiz-stat">최고 {stats.best}</span>
          <span className="quiz-stat">정답 {stats.correct}/{stats.solved}</span>
        </div>
      </div>

      {!question ? (
        <div className="quiz-empty">
          <p>이 범위에는 출제할 수 있는 사건이 부족합니다.</p>
          <p>연도가 분명하고 서로 겹치지 않는 사건이 {QUIZ_SIZE}개 이상 있어야 합니다. 다른 범위를 선택해 보세요.</p>
        </div>
      ) : (
        <>
          <h2 className="quiz-prompt">
            다음 {QUIZ_SIZE}개 사건을 <strong>일어난 순서대로</strong> 눌러 보세요.
          </h2>
          <p className="quiz-hint">
            {checked
              ? '채점 결과입니다.'
              : `${picks.length}/${QUIZ_SIZE}개 선택됨 · 다시 누르면 그 카드부터 선택이 취소됩니다.`}
          </p>

          <ul className="quiz-options">
            {question.display.map(event => {
              const myRank = picks.indexOf(event.card.id) + 1; // 0이면 미선택
              const rightRank = question.answer.indexOf(event) + 1;
              const state = !checked ? '' : myRank === rightRank ? 'right' : 'wrong';
              return (
                <li key={event.card.id}>
                  <button
                    type="button"
                    className={`quiz-option ${myRank ? 'picked' : ''} ${state}`}
                    onClick={() => togglePick(event.card.id)}
                    disabled={checked}
                    aria-pressed={myRank > 0}
                    aria-label={
                      myRank
                        ? `${event.card.title}, ${myRank}번째로 선택됨`
                        : `${event.card.title}, 아직 선택 안 됨`
                    }
                  >
                    <span className="quiz-rank" aria-hidden="true">{myRank || ''}</span>
                    <span className="quiz-option-body">
                      <span className="quiz-option-title">{event.card.title}</span>
                      {checked && (
                        <span className="quiz-option-answer">
                          {event.card.year} · 정답 {rightRank}번째
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {!checked ? (
            <div className="quiz-actions">
              <button type="button" className="quiz-btn" onClick={undoLast} disabled={picks.length === 0}>
                ↩ 마지막 선택 취소
              </button>
              <button type="button" className="quiz-btn" onClick={resetPicks} disabled={picks.length === 0}>
                ⟲ 초기화
              </button>
              <button
                type="button"
                className="quiz-btn primary"
                onClick={checkAnswer}
                disabled={picks.length !== QUIZ_SIZE}
              >
                정답 확인
              </button>
            </div>
          ) : (
            <div className="quiz-result" role="status">
              <p className={`quiz-verdict ${isCorrect ? 'right' : 'wrong'}`}>
                {isCorrect
                  ? `정답입니다! 🎉${stats.combo >= 2 ? ` ${stats.combo}연속 정답` : ''}`
                  : '아쉽네요. 정답 순서를 확인해 보세요.'}
              </p>

              {!isCorrect && (
                <p className="quiz-mine">
                  내가 고른 순서:{' '}
                  {picks
                    .map(id => question.display.find(e => e.card.id === id)?.card.title)
                    .join(' → ')}
                </p>
              )}

              <ol className="quiz-explain">
                {question.answer.map((event, i) => (
                  <li key={event.card.id}>
                    <div className="quiz-explain-head">
                      <strong>{i + 1}. {event.card.title}</strong>
                      <span className="quiz-explain-year">{event.card.year}</span>
                    </div>
                    <p className="quiz-explain-text">{firstSentence(event.card.description)}</p>
                  </li>
                ))}
              </ol>

              {!isCorrect && (
                <p className="quiz-why">
                  연도순으로{' '}
                  {question.answer.map(e => `${e.card.title}(${e.card.year})`).join(' → ')} 입니다.
                </p>
              )}

              <div className="quiz-actions">
                <button type="button" className="quiz-btn primary" onClick={() => loadQuestion(scope)}>
                  다음 문제 ▶
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};
