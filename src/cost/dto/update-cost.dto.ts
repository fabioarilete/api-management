import { Information } from 'src/schemas/Information.schema';
import { MarkUp } from 'src/schemas/markUp.schema';

interface CostMaterial {
  id: string;
  obs: string;
  qt: string;
  totalItemMaterial: number;
}

interface CostOperation {
  id: string;
  obs: string;
  qt: string;
  cav: string;
  ciclo: string;
  totalItemOperation: number;
}

export class UpdateCostDto {
  id: string;
  cod: string;
  name: string;
  unid: string;
  qt: string;
  tipoProduto: string;
  sf_st: string;
  markUpProduct: MarkUp;
  materialsProduct: CostMaterial[];
  operationsProduct: CostOperation[];
  informationsProduct: Information;
  totalMaterials: number;
  totalOperations: number;
  unitCost: number;
  totalCost: number;
}
