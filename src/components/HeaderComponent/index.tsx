import React from "react";
import { Col, Row } from "reactstrap";
import logoBrancaSVG from "../../assets/logo_white_svg.svg";
import Select from "../SelectInput";
import InfoVisibilityToggle from "../InfoVisibilityToggle";

interface MenuOption {
  label: string;
  link: string;
}

const menuOptions: MenuOption[] = [
  {
    label: "resumo",
    link: "/",
  },
  {
    label: "gastos",
    link: "/about",
  },
  {
    label: "ganhos",
    link: "/contact",
  },
  {
    label: "faturas",
    link: "/contact",
  },
];

const Header: React.FC = () => {
  return (
    <Row className="bg-primary py-4 align-items-center rounded-lg">
      <Col
        md={4}
        className="d-flex justify-content-center align-items-center gap-3"
      >
        <img src={logoBrancaSVG} alt="Logo" width={40} />
        <div className="mb-0">
          <Select
            name="select"
            defaultValue={{ value: "jan/25", label: "jan/25" }}
            mode="brown"
            options={[
              { value: "jan/25", label: "jan/25" },
              { value: "", label: "fev/25" },
            ]}
          />
        </div>
        <InfoVisibilityToggle />
      </Col>
      <Col
        md={4}
        className="d-flex justify-content-center gap-3 align-items-center"
      >
        {menuOptions.map((option, idx) => (
          <>
            <a href={option.link}>
              <span className="text-white">{option.label}</span>
            </a>

            {idx !== menuOptions.length - 1 && (
              <span className="text-white">|</span>
            )}
          </>
        ))}
      </Col>
      <Col
        md={4}
        className="d-flex justify-content-center gap-3 align-items-center"
      >
        <span className="text-white">
          olá, <b>guilherme</b>.
        </span>
      </Col>
    </Row>
  );
};

export default Header;
