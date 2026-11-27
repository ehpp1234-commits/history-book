/**
 * Unit Tests for historyData.ts
 * 
 * These tests verify that the Era metadata array is correctly structured
 * and contains all required fields according to the type definitions.
 * 
 * This test file covers Task 3.1 requirements:
 * - 8 Era objects exist
 * - Each Era has all required fields
 * - Era ordering is correct (0-7)
 * - Start/end years are properly defined
 * - Background styling fields are present
 */

import { describe, it, expect } from 'vitest';
import historyData, { eras, cards } from './historyData';
import type { Era, HistoryData } from './types';

describe('historyData - Era Metadata (Task 3.1)', () => {
  describe('eras array structure', () => {
    it('should export exactly 8 eras', () => {
      expect(eras).toBeDefined();
      expect(Array.isArray(eras)).toBe(true);
      expect(eras.length).toBe(8);
    });

    it('should have eras ordered sequentially from 0 to 7', () => {
      const orders = eras.map((era) => era.order);
      expect(orders).toEqual([0, 1, 2, 3, 4, 5, 6, 7]);
    });

    it('should have eras in chronological order by startYear', () => {
      for (let i = 0; i < eras.length - 1; i++) {
        expect(eras[i].startYear).toBeLessThanOrEqual(eras[i + 1].startYear);
      }
    });
  });

  describe('individual era fields', () => {
    const requiredFields: (keyof Era)[] = [
      'id',
      'name',
      'periodLabel',
      'startYear',
      'endYear',
      'color',
      'order',
      'bgColor',
      'bgColorDark',
      'pattern',
      'watermarkLabel',
    ];

    eras.forEach((era, index) => {
      describe(`Era ${index}: ${era.name}`, () => {
        it('should have all required fields', () => {
          requiredFields.forEach((field) => {
            expect(era[field]).toBeDefined();
            expect(era[field]).not.toBe('');
          });
        });

        it('should have valid id format', () => {
          expect(era.id).toMatch(/^era-\d+-/);
        });

        it('should have name between 1-30 characters', () => {
          expect(era.name.length).toBeGreaterThan(0);
          expect(era.name.length).toBeLessThanOrEqual(30);
        });

        it('should have valid startYear and endYear', () => {
          expect(typeof era.startYear).toBe('number');
          expect(typeof era.endYear).toBe('number');
          expect(era.endYear).toBeGreaterThanOrEqual(era.startYear);
        });

        it('should have valid color (CSS format)', () => {
          expect(era.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });

        it('should have valid bgColor (CSS format)', () => {
          expect(era.bgColor).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });

        it('should have valid bgColorDark (CSS format)', () => {
          expect(era.bgColorDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
        });

        it('should have pattern identifier', () => {
          expect(era.pattern).toMatch(/^pattern-/);
        });

        it('should have watermarkLabel with ko, en, and period', () => {
          expect(era.watermarkLabel.ko).toBeDefined();
          expect(era.watermarkLabel.ko.length).toBeGreaterThan(0);
          expect(era.watermarkLabel.en).toBeDefined();
          expect(era.watermarkLabel.en.length).toBeGreaterThan(0);
          expect(era.watermarkLabel.period).toBeDefined();
          expect(era.watermarkLabel.period.length).toBeGreaterThan(0);
        });
      });
    });
  });

  describe('specific era validations', () => {
    it('Era 1 (Prehistoric) should have correct period', () => {
      const era1 = eras.find((e) => e.id === 'era-1-prehistoric');
      expect(era1).toBeDefined();
      expect(era1?.name).toBe('선사 시대 및 국가의 형성');
      expect(era1?.startYear).toBe(-700000);
      expect(era1?.endYear).toBe(-1);
      expect(era1?.order).toBe(0);
    });

    it('Era 2 (Ancient) should have correct period', () => {
      const era2 = eras.find((e) => e.id === 'era-2-ancient');
      expect(era2).toBeDefined();
      expect(era2?.name).toBe('고대: 삼국 및 남북국');
      expect(era2?.startYear).toBe(-100);
      expect(era2?.endYear).toBe(935);
      expect(era2?.order).toBe(1);
    });

    it('Era 3 (Goryeo) should have correct period', () => {
      const era3 = eras.find((e) => e.id === 'era-3-goryeo');
      expect(era3).toBeDefined();
      expect(era3?.name).toBe('고려');
      expect(era3?.startYear).toBe(918);
      expect(era3?.endYear).toBe(1392);
      expect(era3?.order).toBe(2);
    });

    it('Era 4 (Early Joseon) should have correct period', () => {
      const era4 = eras.find((e) => e.id === 'era-4-joseon-early');
      expect(era4).toBeDefined();
      expect(era4?.name).toBe('조선 전기');
      expect(era4?.startYear).toBe(1392);
      expect(era4?.endYear).toBe(1599);
      expect(era4?.order).toBe(3);
    });

    it('Era 5 (Late Joseon) should have correct period', () => {
      const era5 = eras.find((e) => e.id === 'era-5-joseon-late');
      expect(era5).toBeDefined();
      expect(era5?.name).toBe('조선 후기');
      expect(era5?.startYear).toBe(1592);
      expect(era5?.endYear).toBe(1869);
      expect(era5?.order).toBe(4);
    });

    it('Era 6 (Enlightenment) should have correct period', () => {
      const era6 = eras.find((e) => e.id === 'era-6-enlightenment');
      expect(era6).toBeDefined();
      expect(era6?.name).toBe('개항기');
      expect(era6?.startYear).toBe(1863);
      expect(era6?.endYear).toBe(1910);
      expect(era6?.order).toBe(5);
    });

    it('Era 7 (Colonial) should have correct period and dark background', () => {
      const era7 = eras.find((e) => e.id === 'era-7-colonial');
      expect(era7).toBeDefined();
      expect(era7?.name).toBe('일제 강점기');
      expect(era7?.startYear).toBe(1910);
      expect(era7?.endYear).toBe(1945);
      expect(era7?.order).toBe(6);
      // Era 7 has dark background color (Requirement 19.6)
      expect(era7?.bgColor).toBe('#2B2E33');
    });

    it('Era 8 (Modern) should have correct period and dynamic end year', () => {
      const era8 = eras.find((e) => e.id === 'era-8-modern');
      expect(era8).toBeDefined();
      expect(era8?.name).toBe('현대사');
      expect(era8?.startYear).toBe(1945);
      expect(era8?.endYear).toBeGreaterThanOrEqual(2024); // Current year or later
      expect(era8?.order).toBe(7);
    });
  });

  describe('era color uniqueness', () => {
    it('should have unique timeline axis colors for each era', () => {
      const colors = eras.map((era) => era.color);
      const uniqueColors = new Set(colors);
      expect(uniqueColors.size).toBe(eras.length);
    });

    it('should have unique background colors for light theme', () => {
      const bgColors = eras.map((era) => era.bgColor);
      const uniqueBgColors = new Set(bgColors);
      expect(uniqueBgColors.size).toBe(eras.length);
    });

    it('should have unique era IDs', () => {
      const ids = eras.map((era) => era.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(eras.length);
    });
  });

  describe('cards array', () => {
    it('should export cards array (initially empty)', () => {
      expect(cards).toBeDefined();
      expect(Array.isArray(cards)).toBe(true);
    });

    it('should be empty initially (cards populated in tasks 3.2-3.9)', () => {
      expect(cards.length).toBe(0);
    });
  });

  describe('historyData default export', () => {
    it('should export HistoryData object with eras and cards', () => {
      expect(historyData).toBeDefined();
      expect(historyData.eras).toBe(eras);
      expect(historyData.cards).toBe(cards);
    });

    it('should match HistoryData interface structure', () => {
      const data: HistoryData = historyData;
      expect(data.eras).toBeDefined();
      expect(data.cards).toBeDefined();
      expect(Array.isArray(data.eras)).toBe(true);
      expect(Array.isArray(data.cards)).toBe(true);
    });
  });
});

describe('Era background styling (Requirement 19)', () => {
  it('all eras should have pattern identifiers matching expected format', () => {
    const expectedPatterns = [
      'pattern-prehistoric-comb',
      'pattern-ancient-crown',
      'pattern-goryeo-celadon',
      'pattern-joseon-hangeul',
      'pattern-joseon-ink',
      'pattern-enlightenment-newspaper',
      'pattern-independence-declaration',
      'pattern-modern-skyline',
    ];

    const actualPatterns = eras.map((era) => era.pattern);
    expect(actualPatterns).toEqual(expectedPatterns);
  });

  it('all eras should have darker bgColorDark than bgColor (approximation)', () => {
    // Simple heuristic: check that dark theme background has lower hex value
    // This is a rough approximation since true luminance calculation is complex
    eras.forEach((era) => {
      const lightValue = parseInt(era.bgColor.slice(1), 16);
      const darkValue = parseInt(era.bgColorDark.slice(1), 16);
      
      // Dark theme should generally have lower hex value (darker)
      // Note: This may not hold for all color spaces, but is a good sanity check
      if (era.id !== 'era-7-colonial') {
        // Era 7 is special case (already dark in light theme)
        expect(darkValue).toBeLessThan(lightValue);
      }
    });
  });
});
