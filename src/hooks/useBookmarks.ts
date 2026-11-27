import { useState, useEffect, useCallback, useMemo } from 'react';

export const BOOKMARKS_STORAGE_KEY = 'history-book:bookmarks';

function loadBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is string => typeof id === 'string');
  } catch {
    return [];
  }
}

/**
 * 북마크한 카드 id 목록을 localStorage에 저장/복원한다.
 */
export function useBookmarks() {
  const [ids, setIds] = useState<string[]>(loadBookmarks);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(ids));
    } catch (e) {
      console.error('Failed to save bookmarks:', e);
    }
  }, [ids]);

  const bookmarkedIds = useMemo(() => new Set(ids), [ids]);

  const isBookmarked = useCallback((id: string) => bookmarkedIds.has(id), [bookmarkedIds]);

  const toggleBookmark = useCallback((id: string) => {
    setIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  }, []);

  return { bookmarkedIds, isBookmarked, toggleBookmark };
}
