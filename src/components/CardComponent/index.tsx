import React from "react";
import { CardBody, Card } from "reactstrap";

import "./style.css";

interface CardProps {
  title?: string;
  titlePosition?: keyof typeof TITLE_POSITION;
  hasTitleDivisor?: boolean;
  children?: React.ReactNode;
  fontSize?: keyof typeof FONT_SIZE;
  cardClassName?: string;
  sideMarginColor?: string;
}

const FONT_SIZE = {
  small: "small",
  regular: "h4",
  large: "h3",
};

const TITLE_POSITION = {
  left: "start",
  right: "end",
  center: "center",
};

// const COR_PRIMARIA = "#AD7147";
// const COR_BRANCA = "#FFFFFF";

const CardComponent: React.FC<CardProps> = ({
  title,
  children,
  fontSize = "regular",
  titlePosition = "right",
  cardClassName = "p-3",
  sideMarginColor, // Valor padrão se não for passado
}) => {
  const hasTitle = !!title && title.length > 0;
  const hasMarginBorder = !!sideMarginColor;

  return (
    <Card className="shadow border-0 h-100">
      {hasMarginBorder ? (
        <div
          className="card-lateral-margin rounded-start"
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "10px",
            backgroundColor: sideMarginColor,
          }}
        />
      ) : (
        <></>
      )}
      <CardBody className={`${cardClassName}`}>
        {hasTitle ? (
          <div
            className={`d-flex justify-content-${TITLE_POSITION[titlePosition]} pb-2`}
          >
            <p
              className={`fw-bold text-primary text-truncate m-0 ${FONT_SIZE[fontSize]}`}
            >
              {title?.toLowerCase()}
            </p>
          </div>
        ) : null}
        {children}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
