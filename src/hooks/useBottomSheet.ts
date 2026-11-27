import { useState, useCallback } from 'react';

export type BottomSheetState = 'closed' | 'preview' | 'open';

export function useBottomSheet() {
  const [state, setState] = useState<BottomSheetState>('closed');
  const [startY, setStartY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const position = {
    closed: 0,
    preview: 30,
    open: 75
  }[state];

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    // 드래그 로직은 CSS transition으로 처리
  }, [isDragging]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    setIsDragging(false);
    const endY = e.changedTouches[0].clientY;
    const deltaY = endY - startY;
    const threshold = window.innerHeight * 0.1;

    if (deltaY > threshold) {
      // 아래로 드래그
      if (state === 'open') setState('preview');
      else setState('closed');
    } else if (deltaY < -threshold) {
      // 위로 드래그
      if (state === 'preview') setState('open');
    }
  }, [isDragging, startY, state]);

  const open = useCallback(() => setState('preview'), []);
  const expand = useCallback(() => setState('open'), []);
  const close = useCallback(() => setState('closed'), []);

  return {
    state,
    position,
    isDragging,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    },
    open,
    expand,
    close
  };
}