import type { Era } from './types';
import { prehistoricEra } from './eras/prehistoric';
import { ancientEra } from './eras/ancient';
import { goryeoEra } from './eras/goryeo';
import { joseonEarlyEra } from './eras/joseonEarly';
import { joseonLateEra } from './eras/joseonLate';
import { modernOpenEra } from './eras/modernOpen';
import { colonialEra } from './eras/colonial';
import { contemporaryEra } from './eras/contemporary';

/**
 * 한국사 연표 데이터
 * 
 * 각 시대별 파일에서 import하여 합치는 구조
 * - prehistoric.ts: 선사 시대 (9 cards)
 * - ancient.ts: 고대 (56 cards)
 * - goryeo.ts: 고려 (31 cards)
 * - joseonEarly.ts: 조선 전기 (58 cards)
 * - joseonLate.ts: 조선 후기 (59 cards)
 * - modernOpen.ts: 개화기 (40 cards)
 * - colonial.ts: 일제 강점기 (45 cards)
 * - contemporary.ts: 현대사 (37 cards)
 * 
 * 총 335개 카드
 */

export const eras: Era[] = [
  prehistoricEra,
  ancientEra,
  goryeoEra,
  joseonEarlyEra,
  joseonLateEra,
  modernOpenEra,
  colonialEra,
  contemporaryEra,
];

export const historyData = {
  eras
};
