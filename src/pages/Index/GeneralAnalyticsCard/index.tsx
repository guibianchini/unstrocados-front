import React from "react";
import { Col, Row } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import { useIndexContext } from "../../../context/IndexContext";

const GeneralAnalyticsCard: React.FC = () => {
  const { gerais } = useIndexContext();
  return (
    <Col md={4} className="mt-5">
      <CardComponent
        title="estatísticas gerais"
        cardClassName="px-3 d-flex flex-column"
      >
        <Row>
          {gerais.map((card, index) => (
            <Col key={index} md={card.colSize} className="my-3">
              <CardComponent
                title={card.title}
                titlePosition={card.titlePosition}
                fontSize={card.fontSize}
              >
                <h2 className="text-center">{card.value}</h2>
              </CardComponent>
            </Col>
          ))}
        </Row>
      </CardComponent>
    </Col>
  );
};
export default GeneralAnalyticsCard;
