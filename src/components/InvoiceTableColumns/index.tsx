import React from "react";
import { TableColumn } from "react-data-table-component";
import { Bill } from "src/types/Bill";

const renderHeader = (title?: string, subtitle?: string) => {
  if (!title) {
    return null;
  }

  return (
    <div className="d-flex flex-column gap-50 my-1 text-center align-items-center">
      <span className="d-block text-primary fw-bolder h5 mb-0">
        {title.toLowerCase()}
      </span>
      <small className="text-muted fw-light">{subtitle}</small>
    </div>
  );
};

const createColumn = ({
  title,
  subtitle,
  selector,
  minWidth,
}: {
  title?: string;
  subtitle?: string;
  minWidth?: string;
  selector: (row: Bill) => React.ReactNode;
}): TableColumn<Bill> => ({
  name: renderHeader(title, subtitle),
  minWidth: minWidth || "150px",
  cell: (row) => <div className="text-dark">{selector(row)}</div>,
});

const InvoiceTableColumns: () => TableColumn<Bill>[] = () => [
  createColumn({ selector: (row) => row.installment_amount }),
  createColumn({
    title: "Descrição",
    minWidth: "300px",
    selector: (row) => (
      <div className="d-flex flex-column">
        <span className="fw-bold">{row.description}</span>
        <small className="text-muted fw-light">{row.bill_name}</small>
      </div>
    ),
  }),
  createColumn({ title: "Forma", selector: (row) => row.payment_type }),
  createColumn({
    title: "Método",
    selector: (row) => row.bill_payment_method?.name,
  }),
  createColumn({
    title: "Parcela",
    subtitle: "R$1.653,42",
    selector: (row) => row.total_amount,
  }),
  createColumn({
    title: "Compartilhado",
    minWidth: "200px",
    subtitle: "R$653,42",
    selector: (row) => {
      const totalDiscountAmount = row.bill_shared?.reduce(
        (total, bill) => total + bill.discount,
        0
      );

      const allDiscountRelateds = row.bill_shared?.map((bill) => {
        return bill.user_related?.name;
      });

      return (
        <div className="d-flex flex-column">
          <span>{totalDiscountAmount}</span>
          <small className="text-muted fw-light">
            {allDiscountRelateds?.join(", ")}
          </small>
        </div>
      );
    },
  }),
  createColumn({
    title: "A pagar",
    subtitle: "R$1000,00",
    selector: (row) => row.user_amount,
  }),
];

export default InvoiceTableColumns;
