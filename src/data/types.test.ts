/**
 * Type Definition Tests
 * 
 * This file contains basic tests to verify that all type definitions
 * are correctly defined and can be used throughout the application.
 */

import { describe, it, expect } from 'vitest';
import type {
  Era,
  EraWatermarkLabel,
  SummaryCard,
  CardPosition,
  Detail,
  HistoryData,
  ValidationError,
  Theme,
  BottomSheetState,
} from './types';

describe('Type Definitions', () => {
  describe('EraWatermarkLabel', () => {
    it('should accept valid watermark label structure', () => {
      const watermark: EraWatermarkLabel = {
        ko: '고려',
        en: 'GORYEO',
        period: '918–1392',
      };

      expect(watermark.ko).toBe('고려');
      expect(watermark.en).toBe('GORYEO');
      expect(watermark.period).toBe('918–1392');
    });
  });

  describe('Era', () => {
    it('should accept valid era structure with all required fields', () => {
      const era: Era = {
        id: 'era-3',
        name: '고려',
        periodLabel: '918 ~ 1392',
        startYear: 918,
        endYear: 1392,
        color: '#2980B9',
        order: 2,
        bgColor: '#E4EFE9',
        bgColorDark: '#2E3835',
        pattern: 'pattern-goryeo-celadon',
        watermarkLabel: {
          ko: '고려',
          en: 'GORYEO',
          period: '918–1392',
        },
      };

      expect(era.id).toBe('era-3');
      expect(era.name).toBe('고려');
      expect(era.order).toBe(2);
      expect(era.bgColor).toBe('#E4EFE9');
    });

    it('should handle B.C. years as negative numbers', () => {
      const prehistoricEra: Era = {
        id: 'era-1',
        name: '선사 시대 및 국가의 형성',
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
          period: 'B.C. 700,000 ~ B.C. 1세기',
        },
      };

      expect(prehistoricEra.startYear).toBe(-700000);
      expect(prehistoricEra.endYear).toBe(-1);
    });
  });

  describe('CardPosition', () => {
    it('should accept "upper" value', () => {
      const position: CardPosition = 'upper';
      expect(position).toBe('upper');
    });

    it('should accept "lower" value', () => {
      const position: CardPosition = 'lower';
      expect(position).toBe('lower');
    });
  });

  describe('Detail', () => {
    it('should accept valid detail structure', () => {
      const detail: Detail = {
        background: '약 70만 년 전부터 인류가 한반도에 거주하며 뗀석기를 사용하였다.',
        development: '주먹도끼 등 뗀석기를 활용해 사냥과 채집 생활을 하였다.',
        result: '연천 전곡리 유적에서 아슐리안형 주먹도끼가 출토되었다.',
        examPoints: '연천 전곡리와 주먹도끼의 연결, 뗀석기 vs 간석기 구분이 자주 출제된다.',
      };

      expect(detail.background).toBeTruthy();
      expect(detail.development).toBeTruthy();
      expect(detail.result).toBeTruthy();
      expect(detail.examPoints).toBeTruthy();
    });
  });

  describe('SummaryCard', () => {
    it('should accept valid summary card structure', () => {
      const card: SummaryCard = {
        id: 'card-e1-paleolithic',
        eraId: 'era-1',
        subSectionName: '구석기 시대',
        yearLabel: 'B.C. 700,000년경',
        sortYear: -700000,
        position: 'upper',
        title: '구석기 시대',
        keywords: ['뗀석기', '주먹도끼', '연천 전곡리'],
        detail: {
          background: '약 70만 년 전부터 인류가 한반도에 거주하며 뗀석기를 사용하였다.',
          development: '주먹도끼 등 뗀석기를 활용해 사냥과 채집 생활을 하였다.',
          result: '연천 전곡리 유적에서 아슐리안형 주먹도끼가 출토되었다.',
          examPoints: '연천 전곡리와 주먹도끼의 연결, 뗀석기 vs 간석기 구분이 자주 출제된다.',
        },
      };

      expect(card.id).toBe('card-e1-paleolithic');
      expect(card.eraId).toBe('era-1');
      expect(card.position).toBe('upper');
      expect(card.keywords).toHaveLength(3);
    });

    it('should allow optional subSectionName', () => {
      const cardWithoutSubSection: SummaryCard = {
        id: 'card-test',
        eraId: 'era-1',
        yearLabel: '1392년',
        sortYear: 1392,
        position: 'lower',
        title: '조선 건국',
        keywords: ['이성계'],
        detail: {
          background: 'test',
          development: 'test',
          result: 'test',
          examPoints: 'test',
        },
      };

      expect(cardWithoutSubSection.subSectionName).toBeUndefined();
    });
  });

  describe('HistoryData', () => {
    it('should accept valid history data structure', () => {
      const data: HistoryData = {
        eras: [
          {
            id: 'era-1',
            name: '선사 시대',
            periodLabel: 'B.C. 700,000 ~ B.C. 1세기',
            startYear: -700000,
            endYear: -1,
            color: '#8B5E3C',
            order: 0,
            bgColor: '#F5EFE6',
            bgColorDark: '#3D3A36',
            pattern: 'pattern-prehistoric',
            watermarkLabel: {
              ko: '선사 시대',
              en: 'PREHISTORIC',
              period: 'B.C. 700,000 ~ B.C. 1세기',
            },
          },
        ],
        cards: [
          {
            id: 'card-1',
            eraId: 'era-1',
            yearLabel: 'B.C. 700,000년경',
            sortYear: -700000,
            position: 'upper',
            title: '구석기 시대',
            keywords: ['뗀석기'],
            detail: {
              background: 'test',
              development: 'test',
              result: 'test',
              examPoints: 'test',
            },
          },
        ],
      };

      expect(data.eras).toHaveLength(1);
      expect(data.cards).toHaveLength(1);
    });
  });

  describe('ValidationError', () => {
    it('should accept error with cardId', () => {
      const error: ValidationError = {
        cardId: 'card-invalid',
        missingFields: ['title', 'keywords'],
        message: 'Card is missing required fields',
      };

      expect(error.cardId).toBe('card-invalid');
      expect(error.eraId).toBeUndefined();
      expect(error.missingFields).toHaveLength(2);
    });

    it('should accept error with eraId', () => {
      const error: ValidationError = {
        eraId: 'era-invalid',
        missingFields: ['name', 'color'],
        message: 'Era is missing required fields',
      };

      expect(error.eraId).toBe('era-invalid');
      expect(error.cardId).toBeUndefined();
      expect(error.missingFields).toHaveLength(2);
    });
  });

  describe('Theme', () => {
    it('should accept "dark" value', () => {
      const theme: Theme = 'dark';
      expect(theme).toBe('dark');
    });

    it('should accept "light" value', () => {
      const theme: Theme = 'light';
      expect(theme).toBe('light');
    });
  });

  describe('BottomSheetState', () => {
    it('should accept "closed" value', () => {
      const state: BottomSheetState = 'closed';
      expect(state).toBe('closed');
    });

    it('should accept "preview" value', () => {
      const state: BottomSheetState = 'preview';
      expect(state).toBe('preview');
    });

    it('should accept "open" value', () => {
      const state: BottomSheetState = 'open';
      expect(state).toBe('open');
    });
  });
});
