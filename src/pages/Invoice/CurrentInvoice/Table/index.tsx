import React from "react";
import DataTable from "react-data-table-component";
import CardComponent from "src/components/CardComponent";
import InvoiceTableColumns from "src/components/InvoiceTableColumns";
import { BillsMock } from "src/mocks/BillsMock";

const Table: React.FC = () => {
  return (
    <CardComponent cardClassName="px-3 d-flex flex-column">
      <DataTable
        noHeader
        columns={InvoiceTableColumns()}
        // selectableRowDisabled={row => row.status !== 'Agendada'}
        noDataComponent={
          <div className="my-2">
            <span>
              No momento não encontramos resultados! Use o filtro para buscar
              outras opções.
            </span>
          </div>
        }
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
