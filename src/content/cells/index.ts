import type { CellId, CellModel } from './types';
import { animalCell } from './animal';
import { plantCell } from './plant';

export const cellModels: Record<CellId, CellModel> = {
  animal: animalCell,
  plant: plantCell,
};

export const cellModelList: CellModel[] = [animalCell, plantCell];

export type { CellId, CellModel, Organelle, OrganelleKind } from './types';
