import React from "react";
import { Col } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import Toolbar from "./Toolbar";

const CurrentInvoice: React.FC = () => {

  return (
    <Col xs={9} className="mt-5 d-flex flex-column gap-3">
      <Toolbar />
      <CardComponent cardClassName="px-3 d-flex flex-column"></CardComponent>
    </Col>
  );
};

export default CurrentInvoice;
