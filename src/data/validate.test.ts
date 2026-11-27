/**
 * Tests for Data Validation Module
 * 
 * This test suite validates the data validation functions according to
 * Requirements 16.2-16.7, 8.12, 10.7-10.8, 11.6, 12.6-12.7, 14.5, 15.5.
 */

import { describe, it, expect } from 'vitest';
import { 
  isValidLength, 
  validateEra, 
  validateCard, 
  validateHistoryData 
} from './validate';
import type { Era, SummaryCard } from './types';

describe('isValidLength', () => {
  it('should return true for strings within length range', () => {
    expect(isValidLength('test', 1, 10)).toBe(true);
    expect(isValidLength('a', 1, 1)).toBe(true);
    expect(isValidLength('1234567890', 10, 10)).toBe(true);
  });

  it('should return false for strings outside length range', () => {
    expect(isValidLength('', 1, 10)).toBe(false);
    expect(isValidLength('ab', 3, 10)).toBe(false);
    expect(isValidLength('12345678901', 1, 10)).toBe(false);
  });

  it('should return false for non-string values', () => {
    expect(isValidLength(null as any, 1, 10)).toBe(false);
    expect(isValidLength(undefined as any, 1, 10)).toBe(false);
    expect(isValidLength(123 as any, 1, 10)).toBe(false);
    expect(isValidLength({} as any, 1, 10)).toBe(false);
  });
});

describe('validateEra', () => {
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

  it('should return null for valid era', () => {
    const existingIds = new Set<string>();
    const existingColors = new Set<string>();
    const error = validateEra(validEra, existingIds, existingColors);
    expect(error).toBeNull();
  });

  it('should detect missing id', () => {
    const invalidEra = { ...validEra, id: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('id');
  });

  it('should detect duplicate id', () => {
    const existingIds = new Set(['era-1']);
    const error = validateEra(validEra, existingIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('id (not unique)');
  });

  it('should detect invalid name length', () => {
    const invalidEra = { ...validEra, name: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('name');
  });

  it('should detect name exceeding 30 characters', () => {
    const invalidEra = { 
      ...validEra, 
      name: '12345678901234567890123456789012' // 32 chars
    };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('name');
  });

  it('should detect missing periodLabel', () => {
    const invalidEra = { ...validEra, periodLabel: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('periodLabel');
  });

  it('should detect invalid startYear type', () => {
    const invalidEra = { ...validEra, startYear: 'not a number' as any };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('startYear');
  });

  it('should detect invalid endYear type', () => {
    const invalidEra = { ...validEra, endYear: null as any };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('endYear');
  });

  it('should detect duplicate color', () => {
    const existingColors = new Set(['#8B5E3C']);
    const error = validateEra(validEra, new Set(), existingColors);
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('color (not unique)');
  });

  it('should detect invalid order', () => {
    const invalidEra1 = { ...validEra, order: -1 };
    const error1 = validateEra(invalidEra1, new Set(), new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('order');

    const invalidEra2 = { ...validEra, order: 8 };
    const error2 = validateEra(invalidEra2, new Set(), new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('order');
  });

  it('should detect missing bgColor', () => {
    const invalidEra = { ...validEra, bgColor: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('bgColor');
  });

  it('should detect missing bgColorDark', () => {
    const invalidEra = { ...validEra, bgColorDark: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('bgColorDark');
  });

  it('should detect missing pattern', () => {
    const invalidEra = { ...validEra, pattern: '' };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('pattern');
  });

  it('should detect missing watermarkLabel', () => {
    const invalidEra = { ...validEra, watermarkLabel: null as any };
    const error = validateEra(invalidEra, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('watermarkLabel');
  });

  it('should detect invalid watermarkLabel fields', () => {
    const invalidEra1 = { 
      ...validEra, 
      watermarkLabel: { ...validEra.watermarkLabel, ko: '' } 
    };
    const error1 = validateEra(invalidEra1, new Set(), new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('watermarkLabel.ko');

    const invalidEra2 = { 
      ...validEra, 
      watermarkLabel: { ...validEra.watermarkLabel, en: '' } 
    };
    const error2 = validateEra(invalidEra2, new Set(), new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('watermarkLabel.en');

    const invalidEra3 = { 
      ...validEra, 
      watermarkLabel: { ...validEra.watermarkLabel, period: '' } 
    };
    const error3 = validateEra(invalidEra3, new Set(), new Set());
    expect(error3).not.toBeNull();
    expect(error3?.missingFields).toContain('watermarkLabel.period');
  });

  it('should handle non-object input', () => {
    const error = validateEra(null, new Set(), new Set());
    expect(error).not.toBeNull();
    expect(error?.eraId).toBe('unknown');
    expect(error?.missingFields).toContain('entire object');
  });
});

describe('validateCard', () => {
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

  const validEraIds = new Set(['era-1', 'era-2']);

  it('should return null for valid card', () => {
    const error = validateCard(validCard, validEraIds, new Set());
    expect(error).toBeNull();
  });

  it('should detect missing id', () => {
    const invalidCard = { ...validCard, id: '' };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('id');
  });

  it('should detect duplicate id', () => {
    const existingCardIds = new Set(['card-1']);
    const error = validateCard(validCard, validEraIds, existingCardIds);
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('id (not unique)');
  });

  it('should detect invalid eraId reference', () => {
    const invalidCard = { ...validCard, eraId: 'non-existent-era' };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('eraId (invalid reference)');
  });

  it('should detect invalid yearLabel length', () => {
    const invalidCard1 = { ...validCard, yearLabel: '' };
    const error1 = validateCard(invalidCard1, validEraIds, new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('yearLabel');

    const invalidCard2 = { 
      ...validCard, 
      yearLabel: 'a'.repeat(51) // 51 characters
    };
    const error2 = validateCard(invalidCard2, validEraIds, new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('yearLabel');
  });

  it('should detect invalid sortYear type', () => {
    const invalidCard = { ...validCard, sortYear: 'not a number' as any };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('sortYear');
  });

  it('should detect invalid position', () => {
    const invalidCard = { ...validCard, position: 'middle' as any };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('position');
  });

  it('should detect invalid title length', () => {
    const invalidCard1 = { ...validCard, title: '' };
    const error1 = validateCard(invalidCard1, validEraIds, new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('title');

    const invalidCard2 = { 
      ...validCard, 
      title: 'a'.repeat(51) // 51 characters
    };
    const error2 = validateCard(invalidCard2, validEraIds, new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('title');
  });

  it('should detect invalid keywords array', () => {
    const invalidCard1 = { ...validCard, keywords: 'not an array' as any };
    const error1 = validateCard(invalidCard1, validEraIds, new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('keywords');

    const invalidCard2 = { ...validCard, keywords: [] };
    const error2 = validateCard(invalidCard2, validEraIds, new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('keywords (count)');

    const invalidCard3 = { 
      ...validCard, 
      keywords: Array(11).fill('keyword') 
    };
    const error3 = validateCard(invalidCard3, validEraIds, new Set());
    expect(error3).not.toBeNull();
    expect(error3?.missingFields).toContain('keywords (count)');
  });

  it('should detect invalid keyword length', () => {
    const invalidCard = { 
      ...validCard, 
      keywords: ['valid', 'a'.repeat(21)] // second keyword is 21 chars
    };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields.some(f => f.startsWith('keywords['))).toBe(true);
  });

  it('should detect missing detail', () => {
    const invalidCard = { ...validCard, detail: null as any };
    const error = validateCard(invalidCard, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.missingFields).toContain('detail');
  });

  it('should detect invalid detail fields', () => {
    const invalidCard1 = { 
      ...validCard, 
      detail: { ...validCard.detail, background: '' } 
    };
    const error1 = validateCard(invalidCard1, validEraIds, new Set());
    expect(error1).not.toBeNull();
    expect(error1?.missingFields).toContain('detail.background');

    const invalidCard2 = { 
      ...validCard, 
      detail: { ...validCard.detail, development: '' } 
    };
    const error2 = validateCard(invalidCard2, validEraIds, new Set());
    expect(error2).not.toBeNull();
    expect(error2?.missingFields).toContain('detail.development');

    const invalidCard3 = { 
      ...validCard, 
      detail: { ...validCard.detail, result: '' } 
    };
    const error3 = validateCard(invalidCard3, validEraIds, new Set());
    expect(error3).not.toBeNull();
    expect(error3?.missingFields).toContain('detail.result');

    const invalidCard4 = { 
      ...validCard, 
      detail: { ...validCard.detail, examPoints: '' } 
    };
    const error4 = validateCard(invalidCard4, validEraIds, new Set());
    expect(error4).not.toBeNull();
    expect(error4?.missingFields).toContain('detail.examPoints');
  });

  it('should handle non-object input', () => {
    const error = validateCard(null, validEraIds, new Set());
    expect(error).not.toBeNull();
    expect(error?.cardId).toBe('unknown');
    expect(error?.missingFields).toContain('entire object');
  });
});

describe('validateHistoryData', () => {
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

  const validCard: SummaryCard = {
    id: 'card-1',
    eraId: 'era-1',
    yearLabel: 'B.C. 700,000년경',
    sortYear: -700000,
    position: 'upper',
    title: '구석기 시대',
    keywords: ['뗀석기', '주먹도끼'],
    detail: {
      background: '배경',
      development: '전개',
      result: '결과',
      examPoints: '기출 포인트'
    }
  };

  it('should validate complete valid data', () => {
    const eras = Array(8).fill(null).map((_, i) => ({
      ...validEra,
      id: `era-${i}`,
      order: i,
      color: `#color${i}`
    }));

    const data = {
      eras,
      cards: [validCard]
    };

    const result = validateHistoryData(data);
    expect(result.data.eras.length).toBe(8);
    expect(result.data.cards.length).toBe(1);
    expect(result.errors.length).toBe(0);
  });

  it('should detect when Era count is not 8', () => {
    const data = {
      eras: [validEra, { ...validEra, id: 'era-2', color: '#different', order: 1 }],
      cards: []
    };

    const result = validateHistoryData(data);
    expect(result.errors.some(e => 
      e.message.includes('Expected exactly 8 Eras')
    )).toBe(true);
  });

  it('should exclude invalid eras from result', () => {
    const invalidEra = { ...validEra, id: '', color: '#invalid' };
    const eras = Array(8).fill(null).map((_, i) => 
      i === 3 ? invalidEra : {
        ...validEra,
        id: `era-${i}`,
        order: i,
        color: `#color${i}`
      }
    );

    const data = { eras, cards: [] };
    const result = validateHistoryData(data);
    
    expect(result.data.eras.length).toBe(7); // 1 invalid excluded
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors.some(e => e.missingFields.includes('id'))).toBe(true);
  });

  it('should exclude invalid cards from result', () => {
    const eras = Array(8).fill(null).map((_, i) => ({
      ...validEra,
      id: `era-${i}`,
      order: i,
      color: `#color${i}`
    }));

    const invalidCard = { ...validCard, id: '', title: '' };
    const data = {
      eras,
      cards: [validCard, invalidCard]
    };

    const result = validateHistoryData(data);
    expect(result.data.cards.length).toBe(1); // 1 invalid excluded
    expect(result.errors.some(e => 
      e.cardId === 'unknown' || e.missingFields.includes('id')
    )).toBe(true);
  });

  it('should detect cards with invalid eraId references', () => {
    const eras = Array(8).fill(null).map((_, i) => ({
      ...validEra,
      id: `era-${i}`,
      order: i,
      color: `#color${i}`
    }));

    const invalidCard = { ...validCard, eraId: 'non-existent-era' };
    const data = {
      eras,
      cards: [invalidCard]
    };

    const result = validateHistoryData(data);
    expect(result.data.cards.length).toBe(0);
    expect(result.errors.some(e => 
      e.missingFields.includes('eraId (invalid reference)')
    )).toBe(true);
  });

  it('should handle missing eras field', () => {
    const data = { cards: [] };
    const result = validateHistoryData(data);
    
    expect(result.data.eras.length).toBe(0);
    expect(result.errors.some(e => 
      e.missingFields.includes('eras')
    )).toBe(true);
  });

  it('should handle missing cards field', () => {
    const eras = Array(8).fill(null).map((_, i) => ({
      ...validEra,
      id: `era-${i}`,
      order: i,
      color: `#color${i}`
    }));

    const data = { eras };
    const result = validateHistoryData(data);
    
    expect(result.data.cards.length).toBe(0);
    expect(result.errors.some(e => 
      e.missingFields.includes('cards')
    )).toBe(true);
  });

  it('should handle non-object input', () => {
    const result = validateHistoryData(null);
    expect(result.data.eras.length).toBe(0);
    expect(result.data.cards.length).toBe(0);
    expect(result.errors.some(e => 
      e.missingFields.includes('entire data object')
    )).toBe(true);
  });

  it('should maintain valid items when some items are invalid', () => {
    const eras = Array(8).fill(null).map((_, i) => ({
      ...validEra,
      id: `era-${i}`,
      order: i,
      color: `#color${i}`
    }));

    const validCard2 = {
      ...validCard,
      id: 'card-2',
      title: 'Valid Card 2'
    };

    const invalidCard = {
      ...validCard,
      id: 'card-invalid',
      title: '', // Invalid
      eraId: 'era-0'
    };

    const data = {
      eras,
      cards: [validCard, invalidCard, validCard2]
    };

    const result = validateHistoryData(data);
    
    // Should have 2 valid cards, 1 invalid excluded
    expect(result.data.cards.length).toBe(2);
    expect(result.data.cards.map(c => c.id)).toEqual(['card-1', 'card-2']);
    
    // Should have recorded the error for the invalid card
    expect(result.errors.some(e => 
      e.cardId === 'card-invalid' && e.missingFields.includes('title')
    )).toBe(true);
  });
});
