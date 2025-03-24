import React from "react";
import { Col, Row } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import { useIndexContext } from "../../../context/IndexContext";

const FixedBillsCard: React.FC = () => {
  const { contasFixas } = useIndexContext();
  return (
    <Col md={4} className="mt-5">
      <CardComponent
        title="contas fixas"
        cardClassName="px-3 d-flex flex-column"
      >
        <Row>
          {contasFixas.map((card, index) => (
            <Col key={index} md={card.colSize} className="my-3">
              <CardComponent
                title={card.title}
                titlePosition={card.titlePosition}
                fontSize={card.fontSize}
              >
                <div className="text-truncate">
                  <h2 className="text-center">{card.value}</h2>
                  <p className="text-muted text-truncate mb-0 text-center small">
                    {card.destination}
                  </p>
                </div>
              </CardComponent>
            </Col>
          ))}
        </Row>
      </CardComponent>
    </Col>
  );
};
export default FixedBillsCard;
