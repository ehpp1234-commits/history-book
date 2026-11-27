// King data type
export interface KingData {
  id: string;
  eraId: string;
  dynasty: string; // '고구려', '백제', '신라', '발해', '고려', '조선'
  name: string;
  reignStart: string; // 재위 시작 (예: "918년", "B.C. 37")
  reignEnd: string; // 재위 종료 (예: "943년", "668년")
  sortYear: number; // 정렬용 연도
  order: number; // 왕 순서 (조선 1대, 2대 등)
  keyAchievements: string[]; // 핵심 업적 (3-5개)
  institutions: string[]; // 제도 (있는 경우)
  books: string[]; // 서적 (있는 경우)
  majorEvents: string[]; // 주요 사건
  description: string; // 전체 설명
  examKeywords: string[]; // 한능검 출제 키워드
  imageUrl?: string; // 참고 이미지 URL
  imageCaption?: string; // 이미지 설명
}

// Update CardData to support both event cards and king cards
export interface CardData {
  id: string;
  eraId?: string;
  year: string;
  weight: number;
  title: string;
  description: string;
  tags?: string[];
  relatedEvents?: string[];
  type?: 'event' | 'king'; // Add type to distinguish
  kingData?: KingData; // Additional king data
  imageUrl?: string; // 참고 이미지 URL (BottomSheet용)
  imageCaption?: string; // 이미지 설명
}

export interface EraWatermarkLabel {
  ko: string;
  en: string;
  period: string;
}

export interface Era {
  id: string;
  name: string;
  periodLabel: string;
  startYear: number;
  endYear: number;
  color: string;
  order: number;
  bgColor: string;
  bgColorDark: string;
  pattern: string;
  watermarkLabel: EraWatermarkLabel;
  cards?: CardData[];
  kings?: KingData[]; // Add kings array for each era
}

export type CardPosition = 'upper' | 'lower';

export interface Detail {
  background: string;
  development: string;
  result: string;
  examPoints: string;
}

export interface SummaryCard {
  id: string;
  eraId: string;
  subSectionName?: string;
  yearLabel: string;
  sortYear: number;
  position: CardPosition;
  title: string;
  keywords: string[];
  detail: Detail;
}

export interface HistoryData {
  eras: Era[];
  cards: SummaryCard[];
}

export interface ValidationError {
  cardId?: string;
  eraId?: string;
  missingFields: string[];
  message: string;
}

export type Theme = 'dark' | 'light';

export type BottomSheetState = 'closed' | 'preview' | 'open';

export type ViewMode = 'events' | 'kings' | 'chart'; // Add view mode type

