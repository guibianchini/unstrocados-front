export interface Invoice {
  name: string; // março de 25
  total: number; // o valor total em reais (pode ser 0)
  paid: number; // o valor total de compras pagas (pode ser 0)
  pending: number; // o valor total de compras pendentes (pode ser 0)
}
