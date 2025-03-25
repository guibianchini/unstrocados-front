import React from "react";
import { Col } from "reactstrap";
import CardComponent from "../../../components/CardComponent";
import NavbarComponent from "../../../components/NavbarComponent";
import { useBillsContext } from "../../../context/BillsContext";
import BillItem from "../../../components/BillItem";

interface PerStatusOptions {
  name: string;
  value: "pending" | "paid";
}

const porStatusOpcoes: PerStatusOptions[] = [
  { name: "atuais", value: "pending" },
  { name: "pagas", value: "paid" },
];

const PerStatus: React.FC = () => {
  const { setFilterByStatus, filterByStatus, compras } = useBillsContext();

  const menuOptions = porStatusOpcoes.map((opcao) => ({
    label: opcao.name,
    onClick: () => setFilterByStatus(opcao.value),
  }));

  return (
    <Col xs={9} className="mt-5">
      <CardComponent
        titleHtml={
          <NavbarComponent
            options={menuOptions}
            selected={
              porStatusOpcoes.find((opcao) => opcao.value === filterByStatus)
                ?.name || ""
            }
            textColor="primary"
          />
        }
        cardClassName="px-3 d-flex flex-column"
      >
        {compras[filterByStatus].map((bill) => (
          <BillItem key={bill.id} bill={bill} className="my-2" />
        ))}
        </CardComponent>
    </Col>
  );
};

export default PerStatus;
