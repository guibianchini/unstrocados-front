import React from "react";

interface MenuOption {
  label: string;
  link?: string;
  onClick?: () => void;
}

interface NavbarComponentProps {
  options: MenuOption[];
  textColor?: "primary" | "white";
  selected: string;
}

const NavbarComponent: React.FC<NavbarComponentProps> = ({
  options,
  selected,
  textColor = "white",
}) => {
  const textClass = `text-${textColor}`;

  return (
    <div className="d-flex justify-content-center gap-3 align-items-center">
      {options.map((option, idx) => {
        const isSelected = option.label === selected;
        const optionClass = `${isSelected ? "fw-bold" : "fw-light"}`;

        return (
          <React.Fragment key={option.label}>
            {option.link ? (
              <a href={option.link} className={optionClass}>
                <span className={textClass}>{option.label}</span>
              </a>
            ) : (
              <div
                onClick={option.onClick}
                className={optionClass}
                style={{ cursor: "pointer" }}
              >
                {option.label}
              </div>
            )}
            {idx !== options.length - 1 && (
              <span className={`${textClass} fw-light`}>|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default NavbarComponent;
