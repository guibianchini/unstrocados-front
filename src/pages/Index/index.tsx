import React from "react";
import Header from "../../components/HeaderComponent";
import { Row } from "reactstrap";
import { IndexProvider } from "../../context/IndexContext";
import GeneralAnalyticsCard from "./GeneralAnalyticsCard";
import FixedBillsCard from "./FixedBillsCard";
import OccasionalBillsCard from "./OccasionalBillsCard";
import NextMonthsCard from "./NextMonthsCard";
import SharedBillsCard from "./SharedBillsCard";


const Index: React.FC = () => {
  return (
    <IndexProvider>
      <Header />
      <div className="px-5 pb-5">
        <Row className="justify-content-between pb-4">
          <GeneralAnalyticsCard />
          <OccasionalBillsCard />
          <FixedBillsCard />
          <NextMonthsCard />
          <SharedBillsCard />
        </Row>
      </div>
    </IndexProvider>
  );
};

export default Index;
