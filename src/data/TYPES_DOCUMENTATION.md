# TypeScript Type Definitions Documentation

## Overview

This document provides a comprehensive overview of all TypeScript type definitions created for the Korean History Timeline Dashboard, as specified in task 2.1.

## File Location

`src/data/types.ts`

## Type Definitions Summary

### 1. EraWatermarkLabel Interface

**Purpose**: Defines multilingual watermark labels displayed in the background of each Era section.

**Fields**:
- `ko: string` - Korean era name (한글 시대명)
- `en: string` - English era name (영문 시대명)
- `period: string` - Year range display (연도 범위)

**Requirements**: Requirement 19.4 (시대명 워터마크)

---

### 2. Era Interface

**Purpose**: Represents one of the 8 major historical periods in Korean history with complete styling information.

**Basic Fields** (Requirements 16.2):
- `id: string` - Unique identifier
- `name: string` - Display name (1-30 characters)
- `periodLabel: string` - Human-readable period string
- `startYear: number` - Start year (B.C. years are negative)
- `endYear: number` - End year (B.C. years are negative)
- `color: string` - CSS color value for Timeline_Axis
- `order: number` - Time-based index (0-7)

**Styling Fields** (Requirement 19):
- `bgColor: string` - Era-specific background color (light theme)
- `bgColorDark: string` - Era-specific background color (dark theme, 20% darker)
- `pattern: string` - CSS pattern identifier or SVG reference
- `watermarkLabel: EraWatermarkLabel` - Large typography watermark text

**Requirements**: 16.2, 19.1, 19.2, 19.4, 19.11

---

### 3. CardPosition Type

**Purpose**: Defines vertical placement of summary cards relative to timeline axis.

**Values**:
- `'upper'` - Political and major events (above timeline axis)
- `'lower'` - Systems, economy, and cultural heritage (below timeline axis)

**Requirements**: Requirement 2.2, 2.3 (교차 배치)

---

### 4. Detail Interface

**Purpose**: Contains detailed content for the Detail Panel.

**Fields** (all required, minimum 1 character):
- `background: string` - Historical background and context (배경)
- `development: string` - How events unfolded (전개)
- `result: string` - Outcomes and consequences (결과)
- `examPoints: string` - Key exam points (기출 빈출 포인트)

**Requirements**: Requirement 3.2, 16.4

---

### 5. SummaryCard Interface

**Purpose**: Represents a single historical event or concept card on the timeline.

**Fields**:
- `id: string` - Unique identifier
- `eraId: string` - Foreign key to Era.id
- `subSectionName?: string` - Optional sub-section grouping
- `yearLabel: string` - Display label (1-50 characters)
- `sortYear: number` - Integer for chronological sorting
- `position: CardPosition` - Vertical placement ('upper' or 'lower')
- `title: string` - Card title (1-50 characters)
- `keywords: string[]` - Array of 1-10 keywords (each 1-20 characters)
- `detail: Detail` - Detailed content object

**Requirements**: 16.3, 2.5 (연도·제목·키워드 표시)

---

### 6. HistoryData Interface

**Purpose**: Root data structure containing all historical data (single source of truth).

**Fields**:
- `eras: Era[]` - Array of exactly 8 Eras, ordered by time
- `cards: SummaryCard[]` - Array of all SummaryCards

**Requirements**: 16.1, 16.5 (단일 데이터 원천)

---

### 7. ValidationError Interface

**Purpose**: Describes validation errors during data loading.

**Fields**:
- `cardId?: string` - ID of invalid card (mutually exclusive with eraId)
- `eraId?: string` - ID of invalid era (mutually exclusive with cardId)
- `missingFields: string[]` - Array of missing/invalid field names
- `message: string` - Human-readable error message

**Requirements**: 16.7 (검증 실패 처리)

---

### 8. Theme Type

**Purpose**: Defines color theme of the application.

**Values**:
- `'dark'` - Dark color scheme
- `'light'` - Light color scheme

**Requirements**: Requirement 7.1 (테마 전환)

---

### 9. BottomSheetState Type

**Purpose**: State management for mobile Bottom Sheet component.

**Values**:
- `'closed'` - Sheet completely hidden (0% visible)
- `'preview'` - Partial content at ~30% height (title and period only)
- `'open'` - Fully expanded at 70-80% height (all sections visible)

**Requirements**: Requirement 20.6-20.11 (모바일 Bottom Sheet)

---

## Design Compliance

All type definitions are implemented according to the design document section "Components and Interfaces" (design.md lines 1-200).

### Key Design Decisions

1. **Era Interface Enhancement**: Added all styling fields (bgColor, bgColorDark, pattern, watermarkLabel) as specified in Requirement 19 for 시대별 배경 스타일링.

2. **Detail Interface**: Separated into its own interface for better type safety and reusability.

3. **CardPosition Type**: Used string literal union type for type safety instead of plain strings.

4. **Theme & BottomSheetState**: Used string literal union types for exhaustive type checking.

5. **ValidationError**: Designed to support both card and era validation with mutually exclusive ID fields.

---

## JSDoc Comments

All interfaces and types include comprehensive JSDoc comments explaining:
- Purpose of the type/interface
- Description of each field
- Related requirements from the specification
- Example values where appropriate
- Constraints (character limits, value ranges, etc.)

---

## Export Strategy

All types and interfaces are exported using named exports for maximum flexibility and tree-shaking optimization:

```typescript
export interface Era { ... }
export interface SummaryCard { ... }
export type CardPosition = 'upper' | 'lower';
// ... etc
```

---

## Testing

A comprehensive test suite (`types.test.ts`) has been created to verify:
- All interfaces accept valid data structures
- Type constraints are enforced
- Optional fields work correctly
- Union types accept all valid values
- Complex nested structures (Era with watermarkLabel, SummaryCard with detail) work properly

---

## Requirements Coverage

| Requirement | Description | Types Involved |
|------------|-------------|----------------|
| 16.2 | Era 필수 필드 | Era, EraWatermarkLabel |
| 16.3 | SummaryCard 필수 필드 | SummaryCard, Detail, CardPosition |
| 16.4 | 상세 내용 필드 | Detail |
| 7.1 | 테마 전환 | Theme |
| 19.1-19.11 | 시대별 배경 스타일링 | Era (bgColor, bgColorDark, pattern, watermarkLabel) |
| 20.6-20.11 | 모바일 Bottom Sheet | BottomSheetState |
| 16.7 | 데이터 검증 오류 | ValidationError |

All requirements specified in task 2.1 have been fully implemented.
