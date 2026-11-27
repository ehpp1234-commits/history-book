/**
 * Example Usage of Data Validation Module
 * 
 * This file demonstrates how to use the validation functions in practice.
 * These examples can be used as a reference when implementing data loading
 * and validation in the main application.
 */

import { validateHistoryData, type HistoryData } from './validate';
import type { Era, SummaryCard } from './types';

/**
 * Example 1: Basic validation with valid data
 */
function example1_ValidData() {
  console.log('=== Example 1: Valid Data ===\n');
  
  // Create 8 valid Eras
  const eras: Era[] = Array(8).fill(null).map((_, i) => ({
    id: `era-${i}`,
    name: `시대 ${i + 1}`,
    periodLabel: `${1000 * i} ~ ${1000 * (i + 1)}`,
    startYear: 1000 * i,
    endYear: 1000 * (i + 1),
    color: `#${(i * 111111).toString(16).padStart(6, '0')}`,
    order: i,
    bgColor: `#F${i}F${i}F${i}`,
    bgColorDark: `#${i}${i}${i}${i}${i}${i}`,
    pattern: `pattern-${i}`,
    watermarkLabel: {
      ko: `시대 ${i + 1}`,
      en: `ERA ${i + 1}`,
      period: `${1000 * i}~${1000 * (i + 1)}`
    }
  }));

  // Create valid cards
  const cards: SummaryCard[] = [
    {
      id: 'card-1',
      eraId: 'era-0',
      yearLabel: '1000년',
      sortYear: 1000,
      position: 'upper',
      title: '중요 사건 1',
      keywords: ['키워드1', '키워드2'],
      detail: {
        background: '배경 설명',
        development: '전개 과정',
        result: '결과',
        examPoints: '기출 포인트'
      }
    }
  ];

  const { data, errors } = validateHistoryData({ eras, cards });

  console.log(`Valid eras: ${data.eras.length}`);
  console.log(`Valid cards: ${data.cards.length}`);
  console.log(`Errors: ${errors.length}\n`);
}

/**
 * Example 2: Handling invalid data with partial failures
 */
function example2_PartiallyInvalidData() {
  console.log('=== Example 2: Partially Invalid Data ===\n');

  // Create mixed valid and invalid Eras
  const eras = [
    // Valid Era
    {
      id: 'era-0',
      name: '선사 시대',
      periodLabel: 'B.C. 700,000 ~ B.C. 1',
      startYear: -700000,
      endYear: -1,
      color: '#8B5E3C',
      order: 0,
      bgColor: '#F5EFE6',
      bgColorDark: '#3D3A36',
      pattern: 'pattern-prehistoric',
      watermarkLabel: {
        ko: '선사',
        en: 'PREHISTORIC',
        period: 'B.C. 700,000 ~ B.C. 1'
      }
    },
    // Invalid Era (missing name)
    {
      id: 'era-1',
      name: '', // Invalid!
      periodLabel: '918 ~ 1392',
      startYear: 918,
      endYear: 1392,
      color: '#2980B9',
      order: 1,
      bgColor: '#E4EFE9',
      bgColorDark: '#2E3835',
      pattern: 'pattern-goryeo',
      watermarkLabel: {
        ko: '고려',
        en: 'GORYEO',
        period: '918~1392'
      }
    },
    // Fill remaining 6 eras with valid data
    ...Array(6).fill(null).map((_, i) => ({
      id: `era-${i + 2}`,
      name: `시대 ${i + 3}`,
      periodLabel: `${1000 * (i + 2)} ~ ${1000 * (i + 3)}`,
      startYear: 1000 * (i + 2),
      endYear: 1000 * (i + 3),
      color: `#${((i + 2) * 111111).toString(16).padStart(6, '0')}`,
      order: i + 2,
      bgColor: `#F${i + 2}F${i + 2}F${i + 2}`,
      bgColorDark: `#${i + 2}${i + 2}${i + 2}${i + 2}${i + 2}${i + 2}`,
      pattern: `pattern-${i + 2}`,
      watermarkLabel: {
        ko: `시대 ${i + 3}`,
        en: `ERA ${i + 3}`,
        period: `${1000 * (i + 2)}~${1000 * (i + 3)}`
      }
    }))
  ];

  const cards = [
    // Valid card
    {
      id: 'card-1',
      eraId: 'era-0',
      yearLabel: 'B.C. 700,000년경',
      sortYear: -700000,
      position: 'upper',
      title: '구석기 시대',
      keywords: ['뗀석기', '주먹도끼'],
      detail: {
        background: '배경',
        development: '전개',
        result: '결과',
        examPoints: '기출'
      }
    },
    // Invalid card (title too long)
    {
      id: 'card-2',
      eraId: 'era-0',
      yearLabel: 'B.C. 10,000년경',
      sortYear: -10000,
      position: 'lower',
      title: 'a'.repeat(51), // 51 chars - Invalid!
      keywords: ['신석기'],
      detail: {
        background: '배경',
        development: '전개',
        result: '결과',
        examPoints: '기출'
      }
    },
    // Invalid card (referencing non-existent era)
    {
      id: 'card-3',
      eraId: 'era-999', // Invalid reference!
      yearLabel: '918년',
      sortYear: 918,
      position: 'upper',
      title: '고려 건국',
      keywords: ['태조', '왕건'],
      detail: {
        background: '배경',
        development: '전개',
        result: '결과',
        examPoints: '기출'
      }
    }
  ];

  const { data, errors } = validateHistoryData({ eras, cards });

  console.log(`Valid eras: ${data.eras.length} (expected 7, one was invalid)`);
  console.log(`Valid cards: ${data.cards.length} (expected 1, two were invalid)`);
  console.log(`Errors found: ${errors.length}\n`);

  // Log each error (Requirement 16.7)
  errors.forEach(error => {
    if (error.cardId) {
      console.error(`[card:${error.cardId}] missing fields: ${error.missingFields.join(', ')}`);
    } else if (error.eraId) {
      console.error(`[era:${error.eraId}] missing fields: ${error.missingFields.join(', ')}`);
    } else {
      console.error(`[validation] ${error.message}`);
    }
  });
  
  console.log();
}

/**
 * Example 3: Handling catastrophic failures
 */
function example3_CatastrophicFailure() {
  console.log('=== Example 3: Catastrophic Failure (No Valid Data) ===\n');

  // Completely invalid input
  const invalidData = null;

  const { data, errors } = validateHistoryData(invalidData);

  console.log(`Valid eras: ${data.eras.length}`);
  console.log(`Valid cards: ${data.cards.length}`);
  console.log(`Errors: ${errors.length}`);
  console.log('Error:', errors[0]?.message, '\n');
}

/**
 * Example 4: Practical application loading pattern
 */
function example4_PracticalLoading() {
  console.log('=== Example 4: Practical Application Loading ===\n');

  // Simulate loading from historyData.ts
  const rawData = {
    eras: Array(8).fill(null).map((_, i) => ({
      id: `era-${i}`,
      name: `시대 ${i + 1}`,
      periodLabel: `Period ${i + 1}`,
      startYear: 1000 * i,
      endYear: 1000 * (i + 1),
      color: `#${(i * 111111).toString(16).padStart(6, '0')}`,
      order: i,
      bgColor: `#F${i}F${i}F${i}`,
      bgColorDark: `#${i}${i}${i}${i}${i}${i}`,
      pattern: `pattern-${i}`,
      watermarkLabel: {
        ko: `시대 ${i + 1}`,
        en: `ERA ${i + 1}`,
        period: `Period ${i + 1}`
      }
    })),
    cards: Array(20).fill(null).map((_, i) => ({
      id: `card-${i}`,
      eraId: `era-${i % 8}`,
      yearLabel: `${1000 + i * 10}년`,
      sortYear: 1000 + i * 10,
      position: i % 2 === 0 ? 'upper' : 'lower',
      title: `사건 ${i + 1}`,
      keywords: [`키워드${i + 1}A`, `키워드${i + 1}B`],
      detail: {
        background: `배경 ${i + 1}`,
        development: `전개 ${i + 1}`,
        result: `결과 ${i + 1}`,
        examPoints: `기출 ${i + 1}`
      }
    }))
  };

  try {
    const { data, errors } = validateHistoryData(rawData);
    
    // Log validation errors (once per item - Requirement 16.7)
    if (errors.length > 0) {
      console.warn(`Found ${errors.length} validation errors during data loading:`);
      errors.forEach(error => {
        console.error(`  - ${error.message}`);
      });
    }
    
    // Check critical failures
    if (data.eras.length !== 8) {
      console.warn(`Expected 8 Eras, found ${data.eras.length}. Some Eras failed validation.`);
    }
    
    if (data.cards.length === 0) {
      throw new Error('No valid cards found. Cannot render timeline.');
    }
    
    console.log(`\nSuccessfully loaded:`);
    console.log(`  - ${data.eras.length} Eras`);
    console.log(`  - ${data.cards.length} Cards`);
    console.log(`\nData is ready for rendering!\n`);
    
    return data;
  } catch (error) {
    console.error('Fatal error during data loading:', error);
    throw error;
  }
}

/**
 * Example 5: Validation with duplicate detection
 */
function example5_DuplicateDetection() {
  console.log('=== Example 5: Duplicate ID and Color Detection ===\n');

  const eras = [
    {
      id: 'era-1',
      name: '시대 1',
      periodLabel: 'Period 1',
      startYear: 0,
      endYear: 1000,
      color: '#FF0000',
      order: 0,
      bgColor: '#FFF',
      bgColorDark: '#000',
      pattern: 'pattern-1',
      watermarkLabel: { ko: '시대1', en: 'ERA1', period: '0~1000' }
    },
    {
      id: 'era-1', // Duplicate ID!
      name: '시대 2',
      periodLabel: 'Period 2',
      startYear: 1000,
      endYear: 2000,
      color: '#00FF00',
      order: 1,
      bgColor: '#FFF',
      bgColorDark: '#000',
      pattern: 'pattern-2',
      watermarkLabel: { ko: '시대2', en: 'ERA2', period: '1000~2000' }
    },
    {
      id: 'era-3',
      name: '시대 3',
      periodLabel: 'Period 3',
      startYear: 2000,
      endYear: 3000,
      color: '#FF0000', // Duplicate color!
      order: 2,
      bgColor: '#FFF',
      bgColorDark: '#000',
      pattern: 'pattern-3',
      watermarkLabel: { ko: '시대3', en: 'ERA3', period: '2000~3000' }
    },
    // Fill remaining 5 with valid data
    ...Array(5).fill(null).map((_, i) => ({
      id: `era-${i + 4}`,
      name: `시대 ${i + 4}`,
      periodLabel: `Period ${i + 4}`,
      startYear: (i + 3) * 1000,
      endYear: (i + 4) * 1000,
      color: `#${((i + 4) * 111111).toString(16).padStart(6, '0')}`,
      order: i + 3,
      bgColor: '#FFF',
      bgColorDark: '#000',
      pattern: `pattern-${i + 4}`,
      watermarkLabel: { 
        ko: `시대${i + 4}`, 
        en: `ERA${i + 4}`, 
        period: `${(i + 3) * 1000}~${(i + 4) * 1000}` 
      }
    }))
  ];

  const { data, errors } = validateHistoryData({ eras, cards: [] });

  console.log(`Valid eras: ${data.eras.length}`);
  console.log(`Errors: ${errors.length}`);
  
  errors.forEach(error => {
    console.error(`  - [${error.eraId}] ${error.message}`);
  });
  
  console.log();
}

// Run all examples
if (import.meta.url === `file://${process.argv[1]}`) {
  example1_ValidData();
  example2_PartiallyInvalidData();
  example3_CatastrophicFailure();
  example4_PracticalLoading();
  example5_DuplicateDetection();
}

// Export examples for use in other modules
export {
  example1_ValidData,
  example2_PartiallyInvalidData,
  example3_CatastrophicFailure,
  example4_PracticalLoading,
  example5_DuplicateDetection
};
