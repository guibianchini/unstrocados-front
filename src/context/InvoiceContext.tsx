import React, { createContext, useContext } from "react";
import { BillsMock } from "src/mocks/BillsMock";
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
        compras: BillsMock,
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
