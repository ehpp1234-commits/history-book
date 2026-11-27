# Data Validation Module Documentation

## Overview

The validation module (`validate.ts`) provides comprehensive validation functions for Era and SummaryCard data according to the design specifications. It ensures data integrity by checking field existence, type correctness, length constraints, and referential integrity.

## Requirements Satisfied

- **Req 16.2**: Era 8개 existence, field checks
- **Req 16.3-16.4**: Card field checks
- **Req 16.7**: Invalid items excluded, errors recorded
- **Req 8.12, 10.7-10.8, 11.6, 12.6-12.7, 14.5, 15.5**: Data completeness validation

## Exported Functions

### `isValidLength(str: string, min: number, max: number): boolean`

Helper function to check if a string is within the specified length range.

**Parameters:**
- `str`: The string to validate
- `min`: Minimum length (inclusive)
- `max`: Maximum length (inclusive)

**Returns:** `true` if the string length is within [min, max], `false` otherwise

**Example:**
```typescript
isValidLength('test', 1, 10); // true
isValidLength('', 1, 10);     // false
isValidLength('12345678901', 1, 10); // false (11 chars)
```

---

### `validateEra(era: any, existingIds: Set<string>, existingColors: Set<string>): ValidationError | null`

Validates an Era object according to design specifications.

**Validation Rules:**
1. **id**: Must be unique, non-empty string
2. **name**: Must be 1-30 characters
3. **periodLabel**: Must be non-empty string
4. **startYear**: Must be a number (B.C. years are negative)
5. **endYear**: Must be a number
6. **color**: Must be unique, non-empty string (for Timeline_Axis coloring)
7. **order**: Must be 0-7 (for 8 Eras)
8. **bgColor**: Must be non-empty string (light theme background)
9. **bgColorDark**: Must be non-empty string (dark theme background)
10. **pattern**: Must be non-empty string (CSS pattern identifier)
11. **watermarkLabel**: Must be an object with:
    - `ko`: Non-empty string (Korean era name)
    - `en`: Non-empty string (English era name)
    - `period`: Non-empty string (year range)

**Parameters:**
- `era`: The Era object to validate (can be any type)
- `existingIds`: Set of Era IDs already encountered (for uniqueness check)
- `existingColors`: Set of Era colors already encountered (for uniqueness check)

**Returns:** `ValidationError` if invalid, `null` if valid

**Example:**
```typescript
const validEra: Era = {
  id: 'era-1',
  name: '선사 시대',
  periodLabel: 'B.C. 700,000 ~ B.C. 1세기',
  startYear: -700000,
  endYear: -1,
  color: '#8B5E3C',
  order: 0,
  bgColor: '#F5EFE6',
  bgColorDark: '#3D3A36',
  pattern: 'pattern-prehistoric-comb',
  watermarkLabel: {
    ko: '선사 시대',
    en: 'PREHISTORIC',
    period: 'B.C. 700,000 ~ B.C. 1세기'
  }
};

const error = validateEra(validEra, new Set(), new Set());
console.log(error); // null (valid)
```

---

### `validateCard(card: any, validEraIds: Set<string>, existingCardIds: Set<string>): ValidationError | null`

Validates a SummaryCard object according to design specifications.

**Validation Rules:**
1. **id**: Must be unique, non-empty string
2. **eraId**: Must reference an existing Era ID
3. **yearLabel**: Must be 1-50 characters
4. **sortYear**: Must be a number (for chronological sorting)
5. **position**: Must be 'upper' or 'lower'
6. **title**: Must be 1-50 characters
7. **keywords**: Must be an array with:
   - Length: 1-10 items
   - Each keyword: 1-20 characters
8. **detail**: Must be an object with all 4 non-empty fields:
   - `background`: At least 1 character
   - `development`: At least 1 character
   - `result`: At least 1 character
   - `examPoints`: At least 1 character

**Parameters:**
- `card`: The SummaryCard object to validate (can be any type)
- `validEraIds`: Set of valid Era IDs for reference integrity check
- `existingCardIds`: Set of card IDs already encountered (for uniqueness check)

**Returns:** `ValidationError` if invalid, `null` if valid

**Example:**
```typescript
const validCard: SummaryCard = {
  id: 'card-1',
  eraId: 'era-1',
  yearLabel: 'B.C. 700,000년경',
  sortYear: -700000,
  position: 'upper',
  title: '구석기 시대',
  keywords: ['뗀석기', '주먹도끼', '연천 전곡리'],
  detail: {
    background: '약 70만 년 전부터 인류가 한반도에 거주하며 뗀석기를 사용하였다.',
    development: '주먹도끼 등 뗀석기를 활용해 사냥과 채집 생활을 하였다.',
    result: '연천 전곡리 유적에서 아슐리안형 주먹도끼가 출토되었다.',
    examPoints: '연천 전곡리와 주먹도끼의 연결, 뗀석기 vs 간석기 구분이 자주 출제된다.'
  }
};

const validEraIds = new Set(['era-1']);
const error = validateCard(validCard, validEraIds, new Set());
console.log(error); // null (valid)
```

---

### `validateHistoryData(raw: any): { data: HistoryData; errors: ValidationError[] }`

Main validation entry point. Validates complete HistoryData including Eras and SummaryCards.

**Validation Process:**
1. Checks that exactly 8 Eras exist
2. Validates each Era's fields (name length, unique id/color, etc.)
3. Validates each SummaryCard's fields (lengths, eraId reference, etc.)
4. Excludes invalid items from result.data
5. Records all errors in result.errors

**Parameters:**
- `raw`: Raw data object to validate (can be any structure)

**Returns:** Object containing:
- `data`: Validated HistoryData with only valid eras and cards
- `errors`: Array of ValidationError objects for all invalid items

**Behavior:**
- **Invalid Eras**: Excluded from `data.eras`, error recorded
- **Invalid Cards**: Excluded from `data.cards`, error recorded
- **Valid Items**: Always preserved in result, even when other items are invalid
- **Missing References**: Cards with invalid `eraId` are excluded

**Example:**
```typescript
const rawData = {
  eras: [
    // ... 8 Era objects
  ],
  cards: [
    // ... valid and invalid SummaryCard objects
  ]
};

const { data, errors } = validateHistoryData(rawData);

// Log errors to console (Requirement 16.7)
errors.forEach(error => {
  if (error.cardId) {
    console.error(`[card:${error.cardId}] missing fields: ${error.missingFields.join(', ')}`);
  } else if (error.eraId) {
    console.error(`[era:${error.eraId}] missing fields: ${error.missingFields.join(', ')}`);
  } else {
    console.error(`[validation] ${error.message}`);
  }
});

// Use valid data only
console.log(`Valid eras: ${data.eras.length}`);
console.log(`Valid cards: ${data.cards.length}`);
```

## Error Handling Strategy

The validation module follows a **fail-safe** approach:

1. **Non-blocking**: Invalid items are excluded, but validation continues
2. **Detailed Reporting**: Each error includes:
   - `cardId` or `eraId`: Identifier of the invalid item
   - `missingFields`: Array of field names that failed validation
   - `message`: Human-readable error description
3. **Preservation of Valid Data**: Valid items are always included in the result

## Usage in Application

```typescript
// In App.tsx or data loading module
import { validateHistoryData } from './data/validate';
import rawHistoryData from './data/historyData';

function loadHistoryData() {
  const { data, errors } = validateHistoryData(rawHistoryData);
  
  // Log errors once per card/era (Requirement 16.7)
  errors.forEach(error => {
    console.error(`Validation error:`, error);
  });
  
  // Check critical failures
  if (data.eras.length !== 8) {
    console.warn(`Expected 8 Eras, found ${data.eras.length}`);
  }
  
  if (data.cards.length === 0) {
    throw new Error('No valid cards found in history data');
  }
  
  return data;
}
```

## Testing

The validation module includes comprehensive unit tests in `validate.test.ts`:

- **isValidLength**: String length validation edge cases
- **validateEra**: All Era field validations, uniqueness checks
- **validateCard**: All Card field validations, reference integrity
- **validateHistoryData**: Integration tests with multiple items

Run tests with:
```bash
npm test -- src/data/validate.test.ts
```

## Performance Considerations

- **Time Complexity**: O(n + m) where n = number of Eras, m = number of Cards
- **Space Complexity**: O(n + m) for storing Sets and result arrays
- **Optimization**: Sets are used for O(1) uniqueness and reference checks

## Future Enhancements

Potential improvements for future versions:

1. **Detailed Error Messages**: Include actual values vs. expected values
2. **Custom Validators**: Allow registering custom validation functions
3. **Schema Migration**: Automatic data migration for schema changes
4. **Internationalized Errors**: Error messages in multiple languages
5. **Warnings vs. Errors**: Distinguish between blocking and non-blocking issues
