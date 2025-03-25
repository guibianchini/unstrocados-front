
export interface CardData {
  colSize: number | "auto";
  title: string;
  destination?: string;
  titlePosition: "left" | "right" | "center";
  fontSize: "small" | "regular" | "large";
  value: string;
}

export const gerais: CardData[] = [
  {
    colSize: 6,
    title: "recebimentos",
    titlePosition: "center",
    fontSize: "small",
    value: "4.987,32",
  },
  {
    colSize: 6,
    title: "total de gastos",
    titlePosition: "center",
    fontSize: "small",
    value: "5.653,42",
  },
  {
    colSize: 4,
    title: "compartilhados",
    titlePosition: "center",
    fontSize: "small",
    value: "1.876,30",
  },
  {
    colSize: 4,
    title: "investimentos",
    titlePosition: "center",
    fontSize: "small",
    value: "500,00",
  },
  {
    colSize: 4,
    title: "no fim das contas",
    titlePosition: "center",
    fontSize: "small",
    value: "234,39",
  },
];

export const contasAvulsas: CardData[] = [
  {
    colSize: 6,
    title: "imposto renda",
    destination: "Receita Federal",
    titlePosition: "center",
    fontSize: "small",
    value: "1.250,00",
  },
  {
    colSize: 6,
    title: "processo gol",
    destination: "Escritório de Advocacia",
    titlePosition: "center",
    fontSize: "small",
    value: "890,00",
  },
  {
    colSize: 6,
    title: "imposto carro",
    destination: "DETRAN",
    titlePosition: "center",
    fontSize: "small",
    value: "350,42",
  },
  {
    colSize: 6,
    title: "seguro do carro",
    destination: "Porto Seguro",
    titlePosition: "center",
    fontSize: "small",
    value: "1.320,75",
  },
];

export const contasFixas: CardData[] = [
  {
    colSize: 6,
    title: "aluguel",
    titlePosition: "center",
    fontSize: "small",
    value: "2.500,00",
  },
  {
    colSize: 6,
    title: "energia elétrica",
    titlePosition: "center",
    fontSize: "small",
    value: "350,00",
  },
  {
    colSize: 6,
    title: "internet",
    titlePosition: "center",
    fontSize: "small",
    value: "120,00",
  },
  {
    colSize: 6,
    title: "plano de saúde",
    titlePosition: "center",
    fontSize: "small",
    value: "750,00",
  },
];