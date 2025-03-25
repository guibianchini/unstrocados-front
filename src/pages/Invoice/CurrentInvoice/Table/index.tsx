import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import CardComponent from "src/components/CardComponent";
import InvoiceTableColumns from "src/components/InvoiceTableColumns";
import { BillsMock } from "src/mocks/BillsMock";

const Table: React.FC = () => {
  return (
    <CardComponent cardClassName="px-3 d-flex flex-column">
      <DataTable
        noHeader
        columns={InvoiceTableColumns()}
        noDataComponent={
          <div className="my-4 text-center">
            <h4 className="text-primary fw-bold">
              ops! nenhum gasto por aqui.
            </h4>
            <h6 className="text-muted mb-3">
              que tal adicionar seu primeiro agora?
            </h6>
            <Link to="/gastos">
              <Button color="primary" className="text-white">
                adicionar gasto
              </Button>
            </Link>
          </div>
        }
        className="overflow-auto"
        customStyles={{
          headRow: {
            style: {
              opacity: 1,
            },
          },
        }}
        data={BillsMock}
      />
    </CardComponent>
  );
};

export default Table;
