/**
 * TypeScript Type Definitions for Korean History Timeline Dashboard
 */

export interface EraWatermarkLabel {
  ko: string;
  en: string;
  period: string;
}

// Simplified card structure for display
export interface CardData {
  id: string;
  eraId?: string; // Optional for compatibility
  year: string;
  weight: number;
  title: string;
  description: string;
  tags?: string[];
  relatedEvents?: string[];
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
}

export type CardPosition = 'upper' | 'lower';

export interface Detail {
  background: string;
  development: string;
  result: string;
  examPoints: string;
}

// Legacy SummaryCard - kept for backward compatibility
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
