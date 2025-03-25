import React from "react";
import { Col, Row } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import { useIndexContext } from "../../../context/IndexContext";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const NextMonthsCard: React.FC = () => {
  const { proximosMeses } = useIndexContext();

  const COLORS = {
    GAIN: "#005319",
    LOSS: "#960101",
  };

  return (
    <Col md={12} className="mt-5">
      <CardComponent
        title="próximos meses"
        cardClassName="px-3 d-flex flex-column"
      >
        <Row>
          {proximosMeses.map((proximoMes, index) => {
            const balance =
              Number(proximoMes.income) - Number(proximoMes.expense);

            const color = balance > 0 ? COLORS.GAIN : COLORS.LOSS;

            return (
              <Col key={index} className="my-3" xs={12} md={3} xxl={2}>
                <CardComponent
                  title={proximoMes.month}
                  cardClassName="px-3"
                  fontSize="small"
                  sideMarginColor={color}
                >
                  <div className="d-flex justify-content-end text-end flex-column pt-2 gap-2">
                    <div className="d-flex justify-content-end align-items-center gap-1">
                      <h6 className="text-muted pb-0 mb-0">{proximoMes.income},00</h6>
                      <BiSolidUpArrow size={12} />
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-1">
                      <h6 className="text-muted pb-0 mb-0">{proximoMes.expense},00</h6>
                      <BiSolidDownArrow size={12}  />
                    </div>
                    <h1 className="pb-0 mb-0" style={{ color: color }}>{balance},00</h1>
                  </div>
                </CardComponent>
              </Col>
            );
          })}
        </Row>
      </CardComponent>
    </Col>
  );
};
export default NextMonthsCard;
