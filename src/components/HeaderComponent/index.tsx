import React from "react";
import { Col, Row } from "reactstrap";
import logoBrancaSVG from "../../assets/logo_white_svg.svg";
import Select from "../SelectInput";
import InfoVisibilityToggle from "../InfoVisibilityToggle";
import NavbarComponent from "../NavbarComponent";
import { useLocation } from "react-router-dom";
import { NavbarOption } from "src/types/NavBar";
import { useAuthenticationContext } from "src/context/AuthenticationContext";
import clsx from "clsx";

const navbarOptions: NavbarOption[] = [
  {
    label: "resumo",
    link: "/",
  },
  {
    label: "gastos",
    link: "/gastos",
  },
  {
    label: "ganhos",
    link: "/contact",
  },
  {
    label: "faturas",
    link: "/faturas",
  },
];

const Header: React.FC = () => {
  const location = useLocation();
  const { isLoggedIn } = useAuthenticationContext();

  const getSelectedOption = () => {
    if (location.pathname === "/") {
      return "resumo";
    }

    return location.pathname.split("/")[1];
  };

  return (
    <Row className="bg-primary py-4 align-items-center rounded-lg">
      <Col
        xs={5}
        md={4}
        className={clsx("d-flex gap-3 align-items-center", {
          "justify-content-center": isLoggedIn,
          "justify-content-start ps-5": !isLoggedIn,
        })}
      >
        <img src={logoBrancaSVG} alt="Logo" width={40} />
        {isLoggedIn && (
          <>
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
          </>
        )}
      </Col>
      <Col
        md={4}
        className="d-none md:d-flex justify-content-center gap-3 align-items-center"
      >
        {isLoggedIn && (
          <NavbarComponent
            options={navbarOptions}
            selected={getSelectedOption()}
          />
        )}
      </Col>
      <Col
        xs={6}
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
