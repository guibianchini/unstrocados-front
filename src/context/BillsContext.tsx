import React, { createContext, useContext, useState } from "react";
import { BillsMock } from "src/mocks/BillsMock";
import { Bill } from "src/types/Bill";

interface PerCategory {
  name: string; // Lazer
  total: number; // o valor total em reais (não pode ser 0)
  paid: number; // o valor total de compras pagas na categoria (pode ser 0)
  pending: number; // o valor total de compras pendentes na categoria (pode ser 0)
}

type BillsStatus = "pending" | "paid";

interface BillsContextType {
  compras: {
    paid: Bill[];
    pending: Bill[];
  };
  porCategoria: PerCategory[];
  filterByStatus: BillsStatus;
  setFilterByStatus: React.Dispatch<React.SetStateAction<BillsStatus>>;
}

const BillsContext = createContext<BillsContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const BillsProvider: React.FC<Props> = ({ children }) => {
  const [filterByStatus, setFilterByStatus] = useState<BillsStatus>("pending");

  const mockPerCategory: PerCategory[] = [
    { name: "Lazer", total: 75, paid: 25, pending: 50 },
    { name: "Educação", total: 250, paid: 150, pending: 100 },
    { name: "Alimentação", total: 250, paid: 160, pending: 90 },
    { name: "Saúde", total: 250, paid: 250, pending: 0 },
    { name: "Assinaturas", total: 55.9, paid: 0, pending: 55 },
  ];

  return (
    <BillsContext.Provider
      value={{
        compras: {
          paid: BillsMock,
          pending: BillsMock,
        },
        porCategoria: mockPerCategory,
        filterByStatus,
        setFilterByStatus,
      }}
    >
      {children}
    </BillsContext.Provider>
  );
};

export const useBillsContext = (): BillsContextType => {
  const context = useContext(BillsContext);
  if (!context) {
    throw new Error("useBillsContext must be used within an BillsProvider");
  }
  return context;
};
