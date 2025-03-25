import React, { createContext, useContext } from "react";
import { Bill } from "src/types/Bill";
import { Invoice } from "src/types/Invoice";

interface InvoiceContextType {
  compras: Bill[];
  proximosMeses: Invoice[];
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

interface Props {
  children: React.ReactNode;
}

export const InvoiceProvider: React.FC<Props> = ({ children }) => {
  const mockInvoice: Bill[] = [
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

  const proximosMeses: Invoice[] = [
    { name: "Janeiro de 25", paid: 5200.0, pending: 4800.0, total: 10000 },
    { name: "Fevereiro de 25", paid: 4500.0, pending: 5100.0, total: 9600 },
    { name: "Março de 25", paid: 5800.0, pending: 5600.0, total: 11400 },
    { name: "Abril de 25", paid: 5000.0, pending: 5400.0, total: 10400 },
    { name: "Maio de 25", paid: 5200.0, pending: 5900.0, total: 11100 },
    { name: "Junho de 25", paid: 6500.0, pending: 6300.0, total: 12800 },
    { name: "Julho de 25", paid: 6800.0, pending: 6500.0, total: 13300 },
  ];

  return (
    <InvoiceContext.Provider
      value={{
        compras: mockInvoice,
        proximosMeses,
      }}
    >
      {children}
    </InvoiceContext.Provider>
  );
};

export const useInvoiceContext = (): InvoiceContextType => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useInvoiceContext must be used within an InvoiceProvider");
  }
  return context;
};
