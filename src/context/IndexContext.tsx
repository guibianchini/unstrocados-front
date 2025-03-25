import React, { createContext, useContext } from "react";
import {
  CardData,
  contasAvulsas,
  contasFixas,
  gerais,
} from "src/mocks/DashboardIndexMock";

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
  const proximosMeses: MonthData[] = [
    { month: "Janeiro de 25", income: 5200.0, expense: 4800.0 },
    { month: "Fevereiro de 25", income: 4500.0, expense: 5100.0 },
    { month: "Março de 25", income: 5800.0, expense: 5600.0 },
    { month: "Abril de 25", income: 5000.0, expense: 5400.0 },
    { month: "Maio de 25", income: 5200.0, expense: 5900.0 },
    { month: "Junho de 25", income: 6500.0, expense: 6300.0 },
    { month: "Julho de 25", income: 6800.0, expense: 6500.0 },
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
        contasCompartilhadas,
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
