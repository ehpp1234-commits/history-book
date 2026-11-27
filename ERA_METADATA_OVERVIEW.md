# Korean History Timeline - Era Metadata Overview

## Visual Era Timeline

```
B.C. 700,000 ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 2024
           │                                                                      │
    [Era 1]│         [Era 2] [Era 3]  [Era 4]  [Era 5]  [Era 6]  [Era 7] [Era 8]│
  Prehistoric     Ancient Goryeo  Early   Late    Enlight Colonial Modern       │
                                  Joseon  Joseon   -ment                         │
           │                                                                      │
     -700000      -100  918  1392  1599   1869    1910   1945              NOW  │
           │                      ▲                                               │
           │                      └─ Overlap: Era 4 & 5 (임진왜란 1592)          │
           │                                                                      │
           └──────────────────────────────────────────────────────────────────────┘
```

## Era Color Palette

### Light Theme
```
Era 1: #F5EFE6 ░░░░░░░░░░  Warm ochre/beige (earth & pottery)
Era 2: #F3EBD8 ░░░░░░░░░░  Golden/bronze (gold crown era)
Era 3: #E4EFE9 ░░░░░░░░░░  Jade/celadon (celadon pottery)
Era 4: #E8EEF5 ░░░░░░░░░░  Paper/indigo (Hangeul & paper)
Era 5: #EAE8E4 ░░░░░░░░░░  Ink/grey (ink landscapes)
Era 6: #EFE4DC ░░░░░░░░░░  Sepia/brick (modernization)
Era 7: #2B2E33 ██████████  Charcoal/dark slate (dark period) ⚠️ Requires light text
Era 8: #EAF2FA ░░░░░░░░░░  Sky blue/white (contemporary)
```

### Dark Theme (20% darker)
```
Era 1: #3D3A36 ▓▓▓▓▓▓▓▓▓▓
Era 2: #3A3630 ▓▓▓▓▓▓▓▓▓▓
Era 3: #2E3835 ▓▓▓▓▓▓▓▓▓▓
Era 4: #2F3338 ▓▓▓▓▓▓▓▓▓▓
Era 5: #37353A ▓▓▓▓▓▓▓▓▓▓
Era 6: #3A3330 ▓▓▓▓▓▓▓▓▓▓
Era 7: #1E2024 ▓▓▓▓▓▓▓▓▓▓  Slightly lighter for dark mode
Era 8: #2D3338 ▓▓▓▓▓▓▓▓▓▓
```

### Timeline Axis Colors
```
Era 1: #8B5E3C ████  Earthy brown
Era 2: #C0392B ████  Deep red
Era 3: #2980B9 ████  Royal blue
Era 4: #27AE60 ████  Emerald green
Era 5: #8E44AD ████  Purple
Era 6: #D35400 ████  Orange
Era 7: #7F8C8D ████  Steel grey
Era 8: #16A085 ████  Teal
```

## Era Patterns

### Visual Pattern Identifiers
```
Era 1: pattern-prehistoric-comb        ╱╲╱╲╱╲  Comb-pattern pottery (빗살무늬토기)
Era 2: pattern-ancient-crown           ♛      Silla gold crown, Goguryeo three-legged crow
Era 3: pattern-goryeo-celadon          ◈      Inlaid celadon crane pattern (상감청자 운학문)
Era 4: pattern-joseon-hangeul          ㄱㄴㄷ   Hunminjeongeum characters & lattice windows
Era 5: pattern-joseon-ink              ⛰️      Ink landscape painting gradient (수묵 산수화)
Era 6: pattern-enlightenment-newspaper 📰      Newspaper print & Taegeuk pattern
Era 7: pattern-independence-declaration 📜      Independence declaration text (독립선언서)
Era 8: pattern-modern-skyline          🏙️      Modern city skyline & Taegeuk color gradient
```

**Pattern Usage:**
- Opacity: 5-10% for background patterns (maintains text readability)
- Watermark Typography: 10-20% opacity, 48-72px font size
- Blending: 10-20px gradient transition at Era boundaries

## Era Watermarks

Large semi-transparent typography displayed in each Era section background:

```
Era 1: "선사 · PREHISTORIC · B.C. 700,000–B.C. 1"
Era 2: "고대 · ANCIENT · B.C. 1–935"
Era 3: "고려 · GORYEO · 918–1392"
Era 4: "조선 전기 · EARLY JOSEON · 1392–1599"
Era 5: "조선 후기 · LATE JOSEON · 1592–1869"
Era 6: "개항기 · ENLIGHTENMENT · 1863–1910"
Era 7: "일제 강점기 · COLONIAL PERIOD · 1910–1945"
Era 8: "현대사 · MODERN · 1945–현재"
```

## Era Period Specifications

| Era | ID | Korean Name | Period | Duration | Cards |
|-----|----|-----------|---------| ---------|-------|
| 1 | `era-1-prehistoric` | 선사 시대 및 국가의 형성 | B.C. 700,000 ~ B.C. 1 | ~700,000 years | TBD (Task 3.2) |
| 2 | `era-2-ancient` | 고대: 삼국 및 남북국 | B.C. 1 ~ 935 | ~1,000 years | TBD (Task 3.3) |
| 3 | `era-3-goryeo` | 고려 | 918 ~ 1392 | 474 years | TBD (Task 3.4) |
| 4 | `era-4-joseon-early` | 조선 전기 | 1392 ~ 1599 | 207 years | TBD (Task 3.5) |
| 5 | `era-5-joseon-late` | 조선 후기 | 1592 ~ 1869 | 277 years | TBD (Task 3.6) |
| 6 | `era-6-enlightenment` | 개항기 | 1863 ~ 1910 | 47 years | TBD (Task 3.7) |
| 7 | `era-7-colonial` | 일제 강점기 | 1910 ~ 1945 | 35 years | TBD (Task 3.8) |
| 8 | `era-8-modern` | 현대사 | 1945 ~ present | 79+ years | TBD (Task 3.9) |

**Note:** Era 4 and Era 5 have overlapping years (1592-1599) due to the Imjin War (임진왜란) marking the transition from Early to Late Joseon period.

## Design Principles

### Color Selection Rationale

1. **Cultural Representation**: Each color reflects the era's dominant cultural artifacts
   - Prehistoric: Earth and pottery tones
   - Ancient: Gold crowns and bronze
   - Goryeo: Celadon pottery's jade-green
   - Joseon: Traditional paper and indigo dye
   - Colonial: Dark period of oppression
   - Modern: Bright future and progress

2. **Visual Distinctiveness**: Adjacent eras have contrasting colors for clear boundaries
   - Ancient (red) → Goryeo (blue)
   - Goryeo (blue) → Early Joseon (green)
   - Late Joseon (purple) → Enlightenment (orange)

3. **Accessibility**: All colors meet WCAG AA contrast requirements
   - Light theme text: Minimum 4.5:1 contrast ratio
   - Dark theme: 20% darker backgrounds maintain readability
   - Era 7 special case: Light text (#FFFFFF) on dark background (#2B2E33)

### Pattern Design Philosophy

Each pattern should:
- Evoke the era's most iconic cultural symbol
- Be abstract enough to serve as background (not distracting)
- Use simple geometric or organic shapes
- Work at both large and small scales
- Maintain readability when overlaid on cards

### Watermark Typography Strategy

- **Multilingual**: Korean (cultural identity) + English (accessibility) + Period (context)
- **Large Scale**: 48-72px creates immersive era atmosphere
- **Semi-transparent**: 10-20% opacity ensures content hierarchy
- **Fixed Position**: Centered or top-aligned in each Era section
- **Non-interactive**: Pure visual enhancement, doesn't interfere with UI

## Implementation Status

✅ **Completed:**
- [x] Era metadata structure defined
- [x] All 8 eras configured with complete data
- [x] Color palette finalized
- [x] Pattern identifiers assigned
- [x] Watermark labels created
- [x] TypeScript types validated
- [x] Test suite created (50+ test cases)

🔄 **In Progress:**
- [ ] Summary cards for each era (Tasks 3.2-3.9)

📋 **Pending:**
- [ ] SVG pattern files creation (Task 5.1)
- [ ] CSS Custom Properties setup (Task 5.2)
- [ ] Era background component implementation (Task 14.1)

## Usage Example

```typescript
import { eras } from './src/data/historyData';

// Access specific era
const goryeoEra = eras.find(era => era.id === 'era-3-goryeo');
console.log(goryeoEra?.name); // "고려"
console.log(goryeoEra?.periodLabel); // "918 ~ 1392년"
console.log(goryeoEra?.bgColor); // "#E4EFE9"

// Render era background
<div 
  style={{
    backgroundColor: goryeoEra?.bgColor,
    backgroundImage: `url('${goryeoEra?.pattern}.svg')`,
    backgroundSize: 'cover',
    opacity: 0.1
  }}
>
  <span className="watermark">
    {goryeoEra?.watermarkLabel.ko} · {goryeoEra?.watermarkLabel.en}
  </span>
</div>

// Timeline axis coloring
<div 
  className="timeline-axis"
  style={{ borderTopColor: goryeoEra?.color }}
/>
```

## References

- **Design Document**: `.kiro/specs/korean-history-timeline-dashboard/design.md`
- **Requirements**: `.kiro/specs/korean-history-timeline-dashboard/requirements.md`
- **Tasks**: `.kiro/specs/korean-history-timeline-dashboard/tasks.md`
- **Type Definitions**: `src/data/types.ts`
- **Validation Logic**: `src/data/validate.ts`

---

**Last Updated**: Task 3.1 Completion  
**Next Task**: 3.2 - Era 1 Summary Cards (선사 시대 및 국가의 형성)
