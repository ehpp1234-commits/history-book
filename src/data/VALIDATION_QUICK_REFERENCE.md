# Validation Quick Reference Card

## 🚀 Quick Start

```typescript
import { validateHistoryData } from './data/validate';

const { data, errors } = validateHistoryData(rawData);
// data: { eras: Era[], cards: SummaryCard[] }
// errors: ValidationError[]
```

## 📋 Field Requirements Checklist

### Era Requirements
- [ ] `id`: Unique, non-empty string
- [ ] `name`: 1-30 characters
- [ ] `periodLabel`: Non-empty string
- [ ] `startYear`: Number (B.C. = negative)
- [ ] `endYear`: Number
- [ ] `color`: Unique, non-empty string
- [ ] `order`: 0-7 (integer)
- [ ] `bgColor`: Non-empty string
- [ ] `bgColorDark`: Non-empty string
- [ ] `pattern`: Non-empty string
- [ ] `watermarkLabel.ko`: Non-empty string
- [ ] `watermarkLabel.en`: Non-empty string
- [ ] `watermarkLabel.period`: Non-empty string

### Card Requirements
- [ ] `id`: Unique, non-empty string
- [ ] `eraId`: Must reference existing Era.id
- [ ] `yearLabel`: 1-50 characters
- [ ] `sortYear`: Number
- [ ] `position`: 'upper' OR 'lower'
- [ ] `title`: 1-50 characters
- [ ] `keywords`: Array with 1-10 items
- [ ] Each keyword: 1-20 characters
- [ ] `detail.background`: ≥1 character
- [ ] `detail.development`: ≥1 character
- [ ] `detail.result`: ≥1 character
- [ ] `detail.examPoints`: ≥1 character

## ⚡ Common Validation Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `id (not unique)` | Duplicate ID | Use unique identifiers |
| `name` | Empty or >30 chars | Keep 1-30 characters |
| `title` | Empty or >50 chars | Keep 1-50 characters |
| `yearLabel` | Empty or >50 chars | Keep 1-50 characters |
| `keywords (count)` | <1 or >10 items | Keep 1-10 keywords |
| `keywords[n]` | Keyword >20 chars | Keep each ≤20 chars |
| `eraId (invalid reference)` | Era doesn't exist | Check Era.id exists |
| `position` | Not 'upper'/'lower' | Use correct position |
| `order` | Not 0-7 | Use values 0-7 only |
| `color (not unique)` | Duplicate color | Use unique colors |
| `detail.X` | Empty field | Provide content |

## 🔍 Validation Flow

```
Input Data
    ↓
Check 8 Eras exist
    ↓
Validate each Era
    ├─ Valid → Add to result.data.eras
    └─ Invalid → Add to result.errors
    ↓
Build valid Era ID set
    ↓
Validate each Card
    ├─ Valid → Add to result.data.cards
    └─ Invalid → Add to result.errors
    ↓
Return { data, errors }
```

## 💡 Best Practices

### ✅ DO
```typescript
// Log errors once per item
errors.forEach(error => {
  console.error(`[${error.cardId || error.eraId}] ${error.message}`);
});

// Check critical conditions
if (data.eras.length !== 8) {
  console.warn('Expected 8 Eras, found', data.eras.length);
}

// Use validated data only
return data;
```

### ❌ DON'T
```typescript
// Don't use raw data without validation
const unvalidatedData = require('./historyData.json');
render(unvalidatedData); // ❌ BAD

// Don't throw on validation errors
if (errors.length > 0) {
  throw new Error('Validation failed'); // ❌ BAD (blocks valid data)
}

// Don't ignore errors silently
const { data } = validateHistoryData(raw);
// Missing: error logging! ❌ BAD
```

## 🎯 Real-World Example

```typescript
// App.tsx or data loading module
import { validateHistoryData } from './data/validate';
import rawData from './data/historyData';

export function loadHistoryData() {
  try {
    // Validate data
    const { data, errors } = validateHistoryData(rawData);
    
    // Log validation errors (Req 16.7)
    if (errors.length > 0) {
      console.group('Data Validation Warnings');
      errors.forEach(error => {
        const id = error.cardId || error.eraId || 'unknown';
        console.warn(
          `[${id}] Missing: ${error.missingFields.join(', ')}`
        );
      });
      console.groupEnd();
    }
    
    // Check critical failures
    if (data.eras.length < 8) {
      console.error(
        `Critical: Only ${data.eras.length}/8 Eras are valid`
      );
    }
    
    if (data.cards.length === 0) {
      throw new Error('No valid cards - cannot render timeline');
    }
    
    // Success
    console.log(
      `✓ Loaded ${data.eras.length} Eras, ${data.cards.length} Cards`
    );
    return data;
    
  } catch (error) {
    console.error('Fatal: Data loading failed', error);
    // Show error UI to user (Req 16.9)
    throw error;
  }
}
```

## 🧪 Testing Helper

```typescript
// Create valid test Era
function createTestEra(id: string, order: number): Era {
  return {
    id,
    name: `Test Era ${order}`,
    periodLabel: `${order * 1000}~${(order + 1) * 1000}`,
    startYear: order * 1000,
    endYear: (order + 1) * 1000,
    color: `#${(order * 111111).toString(16).padStart(6, '0')}`,
    order,
    bgColor: `#F${order}F${order}F${order}`,
    bgColorDark: `#${order}${order}${order}${order}${order}${order}`,
    pattern: `pattern-${order}`,
    watermarkLabel: {
      ko: `시대${order}`,
      en: `ERA${order}`,
      period: `${order * 1000}~${(order + 1) * 1000}`
    }
  };
}

// Create valid test Card
function createTestCard(id: string, eraId: string): SummaryCard {
  return {
    id,
    eraId,
    yearLabel: '1000년',
    sortYear: 1000,
    position: 'upper',
    title: `Test Card ${id}`,
    keywords: ['keyword1', 'keyword2'],
    detail: {
      background: 'Background',
      development: 'Development',
      result: 'Result',
      examPoints: 'Exam Points'
    }
  };
}
```

## 📊 Validation Statistics

After running validation, you can generate statistics:

```typescript
function getValidationStats(result: ReturnType<typeof validateHistoryData>) {
  const errorsByType = {
    era: result.errors.filter(e => e.eraId).length,
    card: result.errors.filter(e => e.cardId).length,
    structure: result.errors.filter(e => !e.eraId && !e.cardId).length
  };
  
  const errorsByField = result.errors.reduce((acc, error) => {
    error.missingFields.forEach(field => {
      acc[field] = (acc[field] || 0) + 1;
    });
    return acc;
  }, {} as Record<string, number>);
  
  return {
    validEras: result.data.eras.length,
    validCards: result.data.cards.length,
    totalErrors: result.errors.length,
    errorsByType,
    errorsByField,
    mostCommonError: Object.entries(errorsByField)
      .sort(([,a], [,b]) => b - a)[0]
  };
}
```

## 🔗 Related Files

- **Implementation**: `src/data/validate.ts`
- **Tests**: `src/data/validate.test.ts`
- **Examples**: `src/data/validate.example.ts`
- **Full Docs**: `src/data/VALIDATION_DOCUMENTATION.md`
- **Types**: `src/data/types.ts`

## 📞 Support

If validation is failing unexpectedly:

1. Check error messages in console
2. Review field requirements above
3. See examples in `validate.example.ts`
4. Read full docs in `VALIDATION_DOCUMENTATION.md`

---

**Last Updated**: Task 2.2 Implementation  
**Version**: 1.0.0
