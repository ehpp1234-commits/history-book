/**
 * TypeScript Type Definitions for Korean History Timeline Dashboard
 * 
 * This file contains all type definitions for the history data model,
 * UI state, and validation structures used throughout the application.
 */

/**
 * EraWatermarkLabel interface
 * 
 * Defines the multilingual watermark label displayed as large semi-transparent
 * typography in the background of each Era section.
 * 
 * @property ko - Korean era name (e.g., "고려")
 * @property en - English era name (e.g., "GORYEO")
 * @property period - Year range display (e.g., "918–1392")
 */
export interface EraWatermarkLabel {
  ko: string;
  en: string;
  period: string;
}

/**
 * Era interface
 * 
 * Represents one of the 8 major historical periods in Korean history.
 * Each Era has unique visual styling including colors, patterns, and watermarks.
 * 
 * @property id - Unique identifier (e.g., "era-1-prehistoric")
 * @property name - Display name, 1-30 characters (e.g., "선사 시대 및 국가의 형성")
 * @property periodLabel - Human-readable period string (e.g., "B.C. 700,000 ~ B.C. 1세기")
 * @property startYear - Start year as integer (B.C. years are negative)
 * @property endYear - End year as integer (B.C. years are negative)
 * @property color - CSS color value for Timeline_Axis, must be unique across Eras
 * @property order - Time-based index 0-7 for sequential ordering
 * @property bgColor - Era-specific background color for light theme (Requirement 19.1)
 * @property bgColorDark - Era-specific background color for dark theme (Requirement 19.11)
 * @property pattern - CSS pattern identifier or SVG reference (Requirement 19.2)
 * @property watermarkLabel - Large typography watermark text (Requirement 19.4)
 */
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
}

/**
 * CardPosition type
 * 
 * Defines the vertical placement of a summary card relative to the timeline axis.
 * - 'upper': Political and major events (above timeline axis)
 * - 'lower': Systems, economy, and cultural heritage (below timeline axis)
 */
export type CardPosition = 'upper' | 'lower';

/**
 * Detail interface
 * 
 * Contains the detailed content displayed in the Detail Panel when a card is selected.
 * Each field must be at least 1 character long.
 * 
 * @property background - Historical background and context
 * @property development - How events unfolded
 * @property result - Outcomes and consequences
 * @property examPoints - Key points frequently tested in exams
 */
export interface Detail {
  background: string;
  development: string;
  result: string;
  examPoints: string;
}

/**
 * SummaryCard interface
 * 
 * Represents a single historical event or concept card displayed on the timeline.
 * Cards are connected to Year_Nodes via connector lines and positioned either
 * above (upper) or below (lower) the timeline axis.
 * 
 * @property id - Unique identifier for the card
 * @property eraId - Foreign key reference to Era.id (must reference an existing Era)
 * @property subSectionName - Optional sub-section grouping name within an Era
 * @property yearLabel - Display label for year/period, 1-50 characters (e.g., "552년", "B.C. 700,000년경")
 * @property sortYear - Integer for chronological sorting (B.C. years are negative)
 * @property position - Vertical placement: 'upper' for political/events, 'lower' for systems/culture
 * @property title - Card title, 1-50 characters
 * @property keywords - Array of 1-10 keywords, each 1-20 characters
 * @property detail - Detailed content with background, development, result, and exam points
 */
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

/**
 * HistoryData interface
 * 
 * Root data structure containing all historical data for the dashboard.
 * This is the single source of truth for all timeline, card, and navigation rendering.
 * 
 * @property eras - Array of exactly 8 Eras, ordered by time (Requirement 16.1)
 * @property cards - Array of all SummaryCards across all Eras
 */
export interface HistoryData {
  eras: Era[];
  cards: SummaryCard[];
}

/**
 * ValidationError interface
 * 
 * Describes validation errors found during data loading and schema validation.
 * Used to report missing fields or constraint violations without breaking the app.
 * 
 * @property cardId - ID of the invalid card (mutually exclusive with eraId)
 * @property eraId - ID of the invalid era (mutually exclusive with cardId)
 * @property missingFields - Array of field names that are missing or invalid
 * @property message - Human-readable error message
 */
export interface ValidationError {
  cardId?: string;
  eraId?: string;
  missingFields: string[];
  message: string;
}

/**
 * Theme type
 * 
 * Defines the color theme of the application.
 * - 'light': Light color scheme
 * - 'dark': Dark color scheme with reduced brightness (Requirement 7.1)
 */
export type Theme = 'dark' | 'light';

/**
 * BottomSheetState type
 * 
 * Represents the state of the mobile Bottom Sheet component (Requirement 20.6-20.11).
 * The Bottom Sheet displays detail content on mobile devices (viewport width ≤430px).
 * 
 * - 'closed': Sheet is completely hidden (0% visible)
 * - 'preview': Sheet shows partial content at ~30% height (title and period only)
 * - 'open': Sheet is fully expanded at 70-80% height (all detail sections visible)
 */
export type BottomSheetState = 'closed' | 'preview' | 'open';
