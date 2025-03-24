import React, { createContext, useContext } from "react";

interface CardData {
  colSize: number | "auto";
  title: string;
  destination?: string;
  titlePosition: "left" | "right" | "center";
  fontSize: "small" | "regular" | "large";
  value: string;
}

interface MonthData {
  month: string;
  income: number;
  expense: number;
}

interface SharedBillData {
  value: string;
  person_name: string;
}

interface IndexContextType {
  gerais: CardData[];
  contasAvulsas: CardData[];
  contasFixas: CardData[];
  proximosMeses: MonthData[];
  contasCompartilhadas: SharedBillData[];
}

const IndexContext = createContext<IndexContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const IndexProvider: React.FC<Props> = ({ children }) => {
  const gerais: CardData[] = [
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

  const contasAvulsas: CardData[] = [
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

  const contasFixas: CardData[] = [
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

  const proximosMeses: MonthData[] = [
    { month: "Janeiro de 25", income: 5200.00, expense: 4800.00 },
    { month: "Fevereiro de 25", income: 4500.00, expense: 5100.00 },
    { month: "Março de 25", income: 5800.00, expense: 5600.00 },
    { month: "Abril de 25", income: 5000.00, expense: 5400.00 },
    { month: "Maio de 25", income: 5200.00, expense: 5900.00 },
    { month: "Junho de 25", income: 6500.00, expense: 6300.00 },
    { month: "Julho de 25", income: 6800.00, expense: 6500.00 },
  ];

  const contasCompartilhadas: SharedBillData[] = [
    {
      value: "120,50",
      person_name: "João Silva",
    },
    {
      value: "75,30",
      person_name: "Maria Oliveira",
    },
    {
      value: "250,00",
      person_name: "Carlos Souza",
    },
    {
      value: "45,90",
      person_name: "Ana Costa",
    },
    {
      value: "190,00",
      person_name: "Fernanda Lima",
    },
  ];
  

  return (
    <IndexContext.Provider
      value={{
        gerais,
        contasAvulsas,
        contasFixas,
        proximosMeses,
        contasCompartilhadas
      }}
    >
      {children}
    </IndexContext.Provider>
  );
};

export const useIndexContext = (): IndexContextType => {
  const context = useContext(IndexContext);
  if (!context) {
    throw new Error("useIndexContext must be used within an IndexProvider");
  }
  return context;
};
