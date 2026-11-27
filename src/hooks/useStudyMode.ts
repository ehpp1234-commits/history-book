import { useState, useEffect, useCallback } from 'react';

export const STUDY_MODE_STORAGE_KEY = 'history-book:study-mode';

function loadStudyMode(): boolean {
  try {
    return localStorage.getItem(STUDY_MODE_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * 암기 모드(연도/키워드 가리기) on/off 상태. localStorage에 저장한다.
 */
export function useStudyMode() {
  const [studyMode, setStudyMode] = useState<boolean>(loadStudyMode);

  useEffect(() => {
    try {
      localStorage.setItem(STUDY_MODE_STORAGE_KEY, String(studyMode));
    } catch (e) {
      console.error('Failed to save study mode:', e);
    }
  }, [studyMode]);

  const toggleStudyMode = useCallback(() => setStudyMode(prev => !prev), []);

  return { studyMode, toggleStudyMode };
}
