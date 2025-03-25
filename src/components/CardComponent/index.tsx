import React from "react";
import { CardBody, Card } from "reactstrap";

import "./style.css";
import { CardProps, FONT_SIZE, TITLE_POSITION } from "src/types/Card";

// const COR_PRIMARIA = "#AD7147";
// const COR_BRANCA = "#FFFFFF";

const CardComponent: React.FC<CardProps> = ({
  title,
  titleHtml,
  children,
  fontSize = "regular",
  titlePosition = "right",
  cardClassName = "p-3",
  onTitleClick,
  isMinHeight = false,
  sideMarginColor, // Valor padrão se não for passado
}) => {
  const hasTitle = (!!title && title.length > 0) || !!titleHtml;
  const hasMarginBorder = !!sideMarginColor;

  return (
    <Card className={`shadow border-0 ${!isMinHeight ? "h-100" : ""}`}>
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
            className={`d-flex justify-content-${
              TITLE_POSITION[titlePosition]
            } pb-2 ${onTitleClick ? "cursor-pointer" : ""}`}
            onClick={onTitleClick}
          >
            <div
              className={`fw-bold text-primary text-truncate m-0 ${FONT_SIZE[fontSize]}`}
            >
              {title ? <span>{title.toLowerCase()}</span> : null}
              {titleHtml}
            </div>
          </div>
        ) : null}
        {children}
      </CardBody>
    </Card>
  );
};

export default CardComponent;
