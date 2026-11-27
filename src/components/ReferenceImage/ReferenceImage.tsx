import React, { useState } from 'react';
import './ReferenceImage.css';

interface ReferenceImageProps {
  src?: string;
  caption?: string;
  /** 이미지 대체 텍스트로 쓸 카드 제목 */
  title: string;
}

/**
 * 카드의 참고 이미지(유물·사진)와 캡션을 보여준다.
 * 로딩에 실패하면 깨진 아이콘 대신 영역 전체를 숨긴다.
 * 오류 상태는 이 컴포넌트 안에만 있으므로, 부모가 key를 바꿔 다시 마운트하면 초기화된다.
 */
export const ReferenceImage: React.FC<ReferenceImageProps> = ({ src, caption, title }) => {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return null;

  return (
    <div className="reference-image-card">
      <img
        src={src}
        alt={caption || title}
        className="reference-image"
        loading="lazy"
        onError={() => setFailed(true)}
      />
      {caption && <p className="image-caption">{caption}</p>}
    </div>
  );
};
