import React, { createContext, useContext, useState } from "react";
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

  const mockBills: Bill[] = [
    {
      id: 1,
      bill_category: { id: 101, user_id: 1, name: "Lazer", active: true },
      bill_payment_method: {
        id: 201,
        user_id: 1,
        name: "Santander",
        active: true,
      },
      user_id: 1,
      bill_shared: [
        {
          id: 301,
          user_id: 2,
          user_related: {
            id: 401,
            user_id: 2,
            name: "João",
            created_at: new Date("2024-01-10"),
          },
          bill_id: 1,
          discount: 50,
          discount_type: "total",
        },
      ],
      description: "Cinema e pipoca",
      bill_name: "Cinemark",
      payment_type: 1,
      total_amount: 100,
      user_amount: 50,
      start_date: new Date("2024-03-10"),
      end_date: new Date("2024-03-10"),
    },
    {
      id: 2,
      bill_category: { id: 102, user_id: 1, name: "Educação", active: true },
      bill_payment_method: {
        id: 202,
        user_id: 1,
        name: "Nubank",
        active: true,
      },
      user_id: 1,
      description: "Curso online de TypeScript",
      bill_name: "Udemy",
      payment_type: 3,
      total_amount: 200,
      user_amount: 200,
      start_date: new Date("2024-03-05"),
      end_date: new Date("2025-03-05"),
    },
    {
      id: 3,
      bill_category: { id: 103, user_id: 1, name: "Alimentação", active: true },
      bill_payment_method: {
        id: 203,
        user_id: 1,
        name: "PicPay",
        active: true,
      },
      user_id: 1,
      bill_shared: [
        {
          id: 302,
          user_id: 3,
          user_related: {
            id: 402,
            user_id: 3,
            name: "Maria",
            created_at: new Date("2023-12-15"),
          },
          bill_id: 3,
          discount: 20,
          discount_type: "monthly",
        },
      ],
      description: "Jantar no restaurante",
      bill_name: "Restaurante XYZ",
      payment_type: 2,
      total_amount: 180,
      installment_amount: 3,
      user_amount: 160,
      start_date: new Date("2024-03-01"),
      end_date: new Date("2024-06-01"),
    },
    {
      id: 4,
      bill_category: { id: 104, user_id: 1, name: "Saúde", active: true },
      bill_payment_method: {
        id: 204,
        user_id: 1,
        name: "Banco do Brasil",
        active: true,
      },
      user_id: 1,
      description: "Consulta médica particular",
      bill_name: "Clínica Saúde",
      payment_type: 1,
      total_amount: 250,
      user_amount: 250,
      start_date: new Date("2024-02-20"),
      end_date: new Date("2024-02-20"),
    },
    {
      id: 5,
      bill_category: { id: 105, user_id: 1, name: "Assinaturas", active: true },
      bill_payment_method: {
        id: 205,
        user_id: 1,
        name: "C6 Bank",
        active: true,
      },
      user_id: 1,
      description: "Netflix mensal",
      bill_name: "Netflix",
      payment_type: 3,
      total_amount: 55,
      user_amount: 55,
      start_date: new Date("2024-03-01"),
      end_date: new Date("2025-03-01"),
    },
  ];

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
          paid: mockBills,
          pending: mockBills,
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
