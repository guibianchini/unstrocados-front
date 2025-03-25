import { TableColumn } from "react-data-table-component";
import { Bill } from "src/types/Bill";

const renderHeader = (titulo: string) => {
  return (
    <th>
      <div className="d-flex flex-column gap-50 my-1 text-center align-items-cen/ter">
        <span className="d-block text-primary fw-bolder h5 mb-0">{titulo.toLowerCase()}</span>
      </div>
    </th>
  );
};

const prestacaoColumn = {
  cell: (row: Bill) => {
    return (
      <div className="d-flex flex-column gap-50 my-1 fw-bolder">
        <span className="d-block text-dark">{row.installment_amount}</span>
      </div>
    );
  },
};

const nomeColumn = {
  name: renderHeader("Descrição"),
  cell: (row: Bill) => {
    return (
      <div className="d-flex flex-column gap-50 my-1">
        <span className="d-block text-dark fw-bolder">{row.description}</span>
        <small className="d-block text-muted fw-light">{row.bill_name}</small>
      </div>
    );
  },
};

const formaColumn = {
  name: renderHeader("Forma"),
  cell: (row: Bill) => {
    return (
      <div className="d-flex flex-column gap-50 my-1">
        <span className="d-block text-dark fw-light">{row.payment_type}</span>
      </div>
    );
  },
};

const metodoColumn = {
  name: renderHeader("Método"),
  cell: (row: Bill) => {
    return (
      <div className="d-flex flex-column gap-50 my-1">
        <span className="d-block text-dark fw-light">{row.bill_payment_method?.name}</span>
      </div>
    );
  },
};

const InvoiceTableColumns: () => TableColumn<Bill>[] = () => {
  return [prestacaoColumn, nomeColumn, formaColumn, metodoColumn];
};

export default InvoiceTableColumns;

// const colunasTabelaVisitas: TableColumn<any>[] = [
//   {
//     name: <th>AGÊNCIA</th>,
//     // maxWidth: '1rem',
//     selector: row => row.name,
//     cell: row => {
//       return (
//         <div className="d-flex flex-column gap-50 my-1 fw-bolder">
//           <Link to={`/administrativo/agencia/${row.id}`}>
//             <div>
//               <span className="d-block text-dark">{row.name}</span>
//             </div>
//           </Link>{' '}
//         </div>
//       );
//     },
//   },
//   {
//     name: <th>CRECI</th>,
//     // maxWidth: !ehUsuarioFranqueadora && ehCorretor ? undefined : '12rem',
//     cell: row => {
//       return (
//         <>
//           <div className="d-flex flex-column gap-50 my-1 text-truncate">{row.creci}</div>
//         </>
//       );
//     },
//   },
//   {
//     omit: !ehUsuarioFranqueadora,
//     name: <th>RESPONSÁVEL</th>,
//     cell: row => {
//       return (
//         <div className="d-flex flex-lg-column flex-xxl-row gap-lg-1 gap-xxl-0 font-small-3">
//           {row.responsible}
//         </div>
//       );
//     },
//   },
//   {
//     omit: !ehUsuarioFranqueadora,
//     minWidth: '18rem',
//     name: <th>CONTATOS</th>,
//     cell: row => {
//       return (
//         <div className="d-flex flex-column gap-25 my-1">
//           <span className="d-block font-small-3">
//             <b>{UtilService.formatarCelular(row.phone)}</b>
//           </span>
//           <span className="d-block text-info font-small-3">{row.email}</span>
//         </div>
//       );
//     },
//   },
//   {
//     omit: !ehUsuarioFranqueadora,
//     name: <th>STATUS</th>,
//     // maxWidth: '12rem',
//     cell: row => {
//       return (
//         <>
//           <Badge color={pegarCorSituacaoAgencia(row.active ? 'Ativo' : 'Inativo')}>
//             {row.active ? 'Ativo' : 'Inativo'}
//           </Badge>
//         </>
//       );
//     },
//   },
//   {
//     omit: !ehUsuarioFranqueadora,
//     name: <th>USUÁRIOS ATIVOS</th>,
//     // maxWidth: '12rem',
//     cell: row => {
//       return (
//         <div className="d-flex flex-lg-column flex-xxl-row gap-lg-1 gap-xxl-0 font-small-3">
//           {row.broker_count || 0}
//         </div>
//       );
//     },
//   },
// ];
