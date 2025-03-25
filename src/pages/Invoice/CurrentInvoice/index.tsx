import React from "react";
import { Col } from "reactstrap";
import Toolbar from "./Toolbar";
import Table from "./Table";

const CurrentInvoice: React.FC = () => {

  return (
    <Col xs={9} className="mt-5 d-flex flex-column gap-3">
      <Toolbar />
      <Table />
    </Col>
  );
};

export default CurrentInvoice;
