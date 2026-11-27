/**
 * Data Validation Module
 * 
 * This module provides validation functions for Era and SummaryCard data
 * according to the design specifications (Requirements 16.2-16.7, 8.12, 10.7-10.8,
 * 11.6, 12.6-12.7, 14.5, 15.5).
 * 
 * Invalid items are excluded from result.data and recorded in result.errors.
 */

import type { 
  Era, 
  SummaryCard, 
  HistoryData, 
  ValidationError,
  EraWatermarkLabel 
} from './types';

/**
 * Helper function to check if a string is within the specified length range.
 * 
 * @param str - The string to validate
 * @param min - Minimum length (inclusive)
 * @param max - Maximum length (inclusive)
 * @returns true if the string length is within [min, max], false otherwise
 */
export function isValidLength(str: string, min: number, max: number): boolean {
  if (typeof str !== 'string') return false;
  const length = str.length;
  return length >= min && length <= max;
}

/**
 * Validates an Era object according to design specifications.
 * 
 * Requirements validated:
 * - Req 16.2: Era field checks (id, name, periodLabel, startYear, endYear, color, order, 
 *             bgColor, bgColorDark, pattern, watermarkLabel)
 * 
 * @param era - The Era object to validate (can be any type)
 * @param existingIds - Set of Era IDs already encountered (for uniqueness check)
 * @param existingColors - Set of Era colors already encountered (for uniqueness check)
 * @returns ValidationError if invalid, null if valid
 */
export function validateEra(
  era: any,
  existingIds: Set<string>,
  existingColors: Set<string>
): ValidationError | null {
  const missingFields: string[] = [];

  // Check required fields exist
  if (!era || typeof era !== 'object') {
    return {
      eraId: 'unknown',
      missingFields: ['entire object'],
      message: 'Era is not a valid object'
    };
  }

  // Validate id: must be unique string
  if (typeof era.id !== 'string' || era.id.length === 0) {
    missingFields.push('id');
  } else if (existingIds.has(era.id)) {
    missingFields.push('id (not unique)');
  }

  // Validate name: 1-30 characters
  if (!isValidLength(era.name, 1, 30)) {
    missingFields.push('name');
  }

  // Validate periodLabel: must be non-empty string
  if (!isValidLength(era.periodLabel, 1, Infinity)) {
    missingFields.push('periodLabel');
  }

  // Validate startYear: must be a number
  if (typeof era.startYear !== 'number') {
    missingFields.push('startYear');
  }

  // Validate endYear: must be a number
  if (typeof era.endYear !== 'number') {
    missingFields.push('endYear');
  }

  // Validate color: must be unique string
  if (typeof era.color !== 'string' || era.color.length === 0) {
    missingFields.push('color');
  } else if (existingColors.has(era.color)) {
    missingFields.push('color (not unique)');
  }

  // Validate order: must be 0-7
  if (typeof era.order !== 'number' || era.order < 0 || era.order > 7) {
    missingFields.push('order');
  }

  // Validate bgColor: must be non-empty string
  if (typeof era.bgColor !== 'string' || era.bgColor.length === 0) {
    missingFields.push('bgColor');
  }

  // Validate bgColorDark: must be non-empty string
  if (typeof era.bgColorDark !== 'string' || era.bgColorDark.length === 0) {
    missingFields.push('bgColorDark');
  }

  // Validate pattern: must be non-empty string
  if (typeof era.pattern !== 'string' || era.pattern.length === 0) {
    missingFields.push('pattern');
  }

  // Validate watermarkLabel: must have ko, en, period fields
  if (!era.watermarkLabel || typeof era.watermarkLabel !== 'object') {
    missingFields.push('watermarkLabel');
  } else {
    const wm = era.watermarkLabel as EraWatermarkLabel;
    if (typeof wm.ko !== 'string' || wm.ko.length === 0) {
      missingFields.push('watermarkLabel.ko');
    }
    if (typeof wm.en !== 'string' || wm.en.length === 0) {
      missingFields.push('watermarkLabel.en');
    }
    if (typeof wm.period !== 'string' || wm.period.length === 0) {
      missingFields.push('watermarkLabel.period');
    }
  }

  if (missingFields.length > 0) {
    return {
      eraId: era.id || 'unknown',
      missingFields,
      message: `Era validation failed: ${missingFields.join(', ')}`
    };
  }

  return null;
}

/**
 * Validates a SummaryCard object according to design specifications.
 * 
 * Requirements validated:
 * - Req 16.3-16.4: Card field checks (id, eraId, yearLabel, sortYear, position,
 *                  title, keywords, detail)
 * - Req 8.12, 10.7-10.8, 11.6, 12.6-12.7, 14.5, 15.5: Data completeness validation
 * 
 * @param card - The SummaryCard object to validate (can be any type)
 * @param validEraIds - Set of valid Era IDs for reference integrity check
 * @param existingCardIds - Set of card IDs already encountered (for uniqueness check)
 * @returns ValidationError if invalid, null if valid
 */
export function validateCard(
  card: any,
  validEraIds: Set<string>,
  existingCardIds: Set<string>
): ValidationError | null {
  const missingFields: string[] = [];

  // Check required fields exist
  if (!card || typeof card !== 'object') {
    return {
      cardId: 'unknown',
      missingFields: ['entire object'],
      message: 'Card is not a valid object'
    };
  }

  // Validate id: must be unique string
  if (typeof card.id !== 'string' || card.id.length === 0) {
    missingFields.push('id');
  } else if (existingCardIds.has(card.id)) {
    missingFields.push('id (not unique)');
  }

  // Validate eraId: must reference an existing Era
  if (typeof card.eraId !== 'string' || card.eraId.length === 0) {
    missingFields.push('eraId');
  } else if (!validEraIds.has(card.eraId)) {
    missingFields.push('eraId (invalid reference)');
  }

  // Validate yearLabel: 1-50 characters
  if (!isValidLength(card.yearLabel, 1, 50)) {
    missingFields.push('yearLabel');
  }

  // Validate sortYear: must be a number
  if (typeof card.sortYear !== 'number') {
    missingFields.push('sortYear');
  }

  // Validate position: must be 'upper' or 'lower'
  if (card.position !== 'upper' && card.position !== 'lower') {
    missingFields.push('position');
  }

  // Validate title: 1-50 characters
  if (!isValidLength(card.title, 1, 50)) {
    missingFields.push('title');
  }

  // Validate keywords: 1-10 items, each 1-20 characters
  if (!Array.isArray(card.keywords)) {
    missingFields.push('keywords');
  } else {
    if (card.keywords.length < 1 || card.keywords.length > 10) {
      missingFields.push('keywords (count)');
    }
    for (let i = 0; i < card.keywords.length; i++) {
      if (!isValidLength(card.keywords[i], 1, 20)) {
        missingFields.push(`keywords[${i}]`);
        break; // Report first invalid keyword only
      }
    }
  }

  // Validate detail: all 4 fields must be non-empty strings (at least 1 character)
  if (!card.detail || typeof card.detail !== 'object') {
    missingFields.push('detail');
  } else {
    if (!isValidLength(card.detail.background, 1, Infinity)) {
      missingFields.push('detail.background');
    }
    if (!isValidLength(card.detail.development, 1, Infinity)) {
      missingFields.push('detail.development');
    }
    if (!isValidLength(card.detail.result, 1, Infinity)) {
      missingFields.push('detail.result');
    }
    if (!isValidLength(card.detail.examPoints, 1, Infinity)) {
      missingFields.push('detail.examPoints');
    }
  }

  if (missingFields.length > 0) {
    return {
      cardId: card.id || 'unknown',
      missingFields,
      message: `Card validation failed: ${missingFields.join(', ')}`
    };
  }

  return null;
}

/**
 * Validates complete HistoryData including Eras and SummaryCards.
 * 
 * This is the main validation entry point. It:
 * 1. Checks that exactly 8 Eras exist
 * 2. Validates each Era's fields (name length, unique id/color, etc.)
 * 3. Validates each SummaryCard's fields (lengths, eraId reference, etc.)
 * 4. Excludes invalid items from result.data
 * 5. Records all errors in result.errors
 * 
 * Requirements validated:
 * - Req 16.2: Era 8개 existence, field checks
 * - Req 16.3-16.4: Card field checks
 * - Req 16.7: Invalid items excluded, errors recorded
 * - Req 8.12, 10.7-10.8, 11.6, 12.6-12.7, 14.5, 15.5: Data completeness validation
 * 
 * @param raw - Raw data object to validate (can be any structure)
 * @returns Object containing validated data and array of validation errors
 */
export function validateHistoryData(raw: any): { 
  data: HistoryData; 
  errors: ValidationError[] 
} {
  const errors: ValidationError[] = [];
  const validEras: Era[] = [];
  const validCards: SummaryCard[] = [];

  // Validate raw input structure
  if (!raw || typeof raw !== 'object') {
    errors.push({
      missingFields: ['entire data object'],
      message: 'History data is not a valid object'
    });
    return {
      data: { eras: [], cards: [] },
      errors
    };
  }

  // Check that eras array exists
  if (!Array.isArray(raw.eras)) {
    errors.push({
      missingFields: ['eras'],
      message: 'eras field is missing or not an array'
    });
    return {
      data: { eras: [], cards: [] },
      errors
    };
  }

  // Check that exactly 8 Eras exist (Requirement 16.2)
  if (raw.eras.length !== 8) {
    errors.push({
      missingFields: ['eras (count)'],
      message: `Expected exactly 8 Eras, found ${raw.eras.length}`
    });
  }

  // Validate each Era
  const existingEraIds = new Set<string>();
  const existingEraColors = new Set<string>();

  for (const era of raw.eras) {
    const error = validateEra(era, existingEraIds, existingEraColors);
    if (error) {
      errors.push(error);
    } else {
      validEras.push(era as Era);
      existingEraIds.add(era.id);
      existingEraColors.add(era.color);
    }
  }

  // Build set of valid Era IDs for card validation
  const validEraIds = new Set(validEras.map(era => era.id));

  // Check that cards array exists
  if (!Array.isArray(raw.cards)) {
    errors.push({
      missingFields: ['cards'],
      message: 'cards field is missing or not an array'
    });
    return {
      data: { eras: validEras, cards: [] },
      errors
    };
  }

  // Validate each Card
  const existingCardIds = new Set<string>();

  for (const card of raw.cards) {
    const error = validateCard(card, validEraIds, existingCardIds);
    if (error) {
      errors.push(error);
    } else {
      validCards.push(card as SummaryCard);
      existingCardIds.add(card.id);
    }
  }

  return {
    data: {
      eras: validEras,
      cards: validCards
    },
    errors
  };
}
