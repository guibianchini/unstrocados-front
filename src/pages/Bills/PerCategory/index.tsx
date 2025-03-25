import React from "react";
import { Col } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import { useBillsContext } from "../../../context/BillsContext";

const PerCategory: React.FC = () => {
  const { porCategoria, filterByStatus } = useBillsContext();

  const valoresPorCategoria = {
    [filterByStatus]: porCategoria
      .filter((categoria) => categoria[filterByStatus] > 0)
      .map((categoria) => ({
        name: categoria.name,
        total: categoria[filterByStatus],
      })),
  };

  const renderTitle = (): React.ReactNode => {
    return (
      <div className="fw-light">
        <h5 className="text-center m-0">por</h5>
        <h4 className="text-center fw-bold m-0">categorias</h4>
      </div>
    );
  };

  return (
    <Col xs={3} className="mt-5">
      <CardComponent
        titleHtml={renderTitle()}
        titlePosition="center"
        cardClassName="px-3 d-flex flex-column"
      >
        {valoresPorCategoria[filterByStatus].map((categoria) => (
          <div className="my-3">
            <CardComponent
              title={categoria.name}
              titlePosition="center"
              fontSize="small"
              cardClassName="m-0"
            >
              <h2 className="text-center m-0">{categoria.total},00</h2>
            </CardComponent>
          </div>
        ))}
      </CardComponent>
    </Col>
  );
};

export default PerCategory;
