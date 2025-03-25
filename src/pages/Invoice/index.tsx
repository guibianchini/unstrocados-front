import React from "react";
import Header from "../../components/HeaderComponent";
import { Row } from "reactstrap";
import { InvoiceProvider } from "src/context/InvoiceContext";
import NextInvoices from "./NextInvoices";
import CurrentInvoice from "./CurrentInvoice";

const Invoice: React.FC = () => {
  return (
    <InvoiceProvider>
      <Header />
      <div className="px-5 pb-5">
        <Row className="justify-content-between pb-4">
          <CurrentInvoice />
          <NextInvoices />
        </Row>
      </div>
    </InvoiceProvider>
  );
};

export default Invoice;
