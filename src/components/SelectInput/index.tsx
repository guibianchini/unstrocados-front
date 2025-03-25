import React from "react";
import Select from "react-select";

import "./input.css";
import { SelectProps } from "src/types/Select";
import { Label } from "reactstrap";

const COR_PRIMARIA = "#AD7147";
const COR_BRANCA = "#FFFFFF";

const SelectComponent: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  placeholder = "",
  defaultValue,
  refProp,
  mode = "white",
  label,
  isClearable = false,
}) => {
  return (
    <>
      {label && <Label className="fw-bold text-primary small">{label}</Label>}
      <Select
        defaultValue={defaultValue}
        name={name}
        onChange={(value) => onChange?.(value)}
        options={options}
        placeholder={placeholder}
        isClearable={isClearable}
        isSearchable={false}
        ref={refProp}
        styles={{
          control: (provided) => ({
            ...provided,

            cursor: "pointer",

            borderColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            backgroundColor: mode === "white" ? COR_BRANCA : COR_PRIMARIA,
            ":focus": {
              borderColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
            ":focus-within": {
              borderColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
            "::selection": {
              backgroundColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
            ":active": {
              borderColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
            ":hover": {
              borderColor: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
          }),
          option: (provided) => ({
            ...provided,

            cursor: "pointer",
            
            color: COR_PRIMARIA,
            backgroundColor: COR_BRANCA,
            ":hover": {
              backgroundColor: COR_PRIMARIA,
              color: COR_BRANCA,
            },
          }),
          singleValue: (provided) => ({
            ...provided,
            color: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
          }),
          dropdownIndicator: (provided) => ({
            ...provided,
            svg: {
              fill: mode === "white" ? COR_PRIMARIA : COR_BRANCA,
            },
          }),
        }}
      />
    </>
  );
};

export default SelectComponent;
