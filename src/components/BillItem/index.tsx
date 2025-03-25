import React from "react";
import CardComponent from "../CardComponent";
import { Badge, Button, Col, Row } from "reactstrap";
import { BiRightArrowCircle } from "react-icons/bi";
import { Bill, TIPOS_PAGAMENTOS } from "src/types/Bill";

type Props = {
  bill: Bill;
  className?: string;
};

const BillItem: React.FC<Props> = ({ bill, className }) => {
  const {
    description,
    user_amount,
    bill_name,
    bill_payment_method,
    bill_category,
    installment_amount,
    payment_type,
    end_date
  } = bill;

  const getPaymentType = () => {
    if (payment_type === TIPOS_PAGAMENTOS["á vista"]) {
      return "á vista";
    }

    if (payment_type === TIPOS_PAGAMENTOS["parcelado"]) {
      return `parcelado em ${installment_amount}x`;
    }

    if (payment_type === TIPOS_PAGAMENTOS["assinatura"]) {
      return "assinatura";
    }
  };

  
  // Função para formatar a data
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: '2-digit', month: 'short' };
    return date.toLocaleDateString('pt-BR', options).toLowerCase();
  };

  const formattedDate = end_date ? formatDate(end_date) : "";

  return (
    <div className={className}>
      <CardComponent>
        <Row className="align-items-center">
          <Col>
            <div className="d-flex flex-column text-center">
              <h4 className="fw-light">{formattedDate.split(" ")[0]}</h4>
              <h4 className="fw-light mb-0">{formattedDate.split(" ")[2]}</h4>
            </div>
          </Col>
          <Col md={10}>
            <div className="d-flex justify-content-between align-items-end">
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column">
                  <h5 className="fw-bold mb-0">{description?.toLowerCase()}</h5>
                  <small className="fw-light">{bill_name}</small>
                </div>
                <div className="d-flex gap-2">
                  <Badge color="secondary">
                    <span className="text-dark">
                      {bill_payment_method.name}
                    </span>
                  </Badge>
                  <Badge color="primary">{bill_category.name}</Badge>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h2 className="mb-0">{user_amount},00</h2>
                <small className="fw-light">{getPaymentType()}</small>
              </div>
            </div>
          </Col>
          <Col  className="align-self-end text-end">
            <Button className="p-0 m-0 bg-transparent border-0 text-primary">
              <BiRightArrowCircle size={20} />
            </Button>
          </Col>
        </Row>
      </CardComponent>
    </div>
  );
};

export default BillItem;
