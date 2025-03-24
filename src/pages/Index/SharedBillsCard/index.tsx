import React from "react";
import { Col, Row } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import { useIndexContext } from "../../../context/IndexContext";

const SharedBillsCard: React.FC = () => {
  const { contasCompartilhadas } = useIndexContext();
  return (
    <Col md={12} className="mt-5">
      <CardComponent
        title="contas fixas"
        cardClassName="px-3 d-flex flex-column"
      >
        <Row>
          {contasCompartilhadas.map((card, index) => (
            <Col key={index} md={2} className="my-3">
              <CardComponent
                title={card.person_name}
                titlePosition={"right"}
                fontSize="small"
              >
                <div className="text-truncate">
                  <h2 className="text-center">{card.value}</h2>
                </div>
              </CardComponent>
            </Col>
          ))}
        </Row>
      </CardComponent>
    </Col>
  );
};
export default SharedBillsCard;
