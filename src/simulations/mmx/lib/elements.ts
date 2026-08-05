// 移植自 IGCSE_miniMax（作者 CrazyRock114，non-commercial）：src/content/lessons/0620/2-2-atomic-structure/kernel.ts（仅 ELEMENTS 常量）
// import 路径由 scripts/port-mmx-primitives.mjs 改写，勿手改 import 区块以外的差异
export const ELEMENTS = [
  { symbol: 'H', name: 'Hydrogen', neutrons: 0 },
  { symbol: 'He', name: 'Helium', neutrons: 2 },
  { symbol: 'Li', name: 'Lithium', neutrons: 4 },
  { symbol: 'Be', name: 'Beryllium', neutrons: 5 },
  { symbol: 'B', name: 'Boron', neutrons: 6 },
  { symbol: 'C', name: 'Carbon', neutrons: 6 },
  { symbol: 'N', name: 'Nitrogen', neutrons: 7 },
  { symbol: 'O', name: 'Oxygen', neutrons: 8 },
  { symbol: 'F', name: 'Fluorine', neutrons: 10 },
  { symbol: 'Ne', name: 'Neon', neutrons: 10 },
  { symbol: 'Na', name: 'Sodium', neutrons: 12 },
  { symbol: 'Mg', name: 'Magnesium', neutrons: 12 },
  { symbol: 'Al', name: 'Aluminium', neutrons: 14 },
  { symbol: 'Si', name: 'Silicon', neutrons: 14 },
  { symbol: 'P', name: 'Phosphorus', neutrons: 16 },
  { symbol: 'S', name: 'Sulfur', neutrons: 16 },
  { symbol: 'Cl', name: 'Chlorine', neutrons: 18 },
  { symbol: 'Ar', name: 'Argon', neutrons: 22 },
  { symbol: 'K', name: 'Potassium', neutrons: 20 },
  { symbol: 'Ca', name: 'Calcium', neutrons: 20 },
] as const
