import React from "react";
import Header from "../../components/HeaderComponent";
import { Row } from "reactstrap";
import { BillsProvider } from "../../context/BillsContext";
import PerCategory from "./PerCategory";
import PerStatus from "./PerStatus";

const Bills: React.FC = () => {
  return (
    <BillsProvider>
      <Header />
      <div className="px-5 pb-5">
        <Row className="justify-content-between pb-4">
          <PerStatus />
          <PerCategory />
        </Row>
      </div>
    </BillsProvider>
  );
};

export default Bills;
