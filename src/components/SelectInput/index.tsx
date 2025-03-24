import React from "react";
import Select, { SelectInstance } from "react-select";

import "./input.css";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  name: string;
  options: Option[];
  defaultValue?: Option;
  placeholder?: string;
  id?: string;
  onChange?: (value: unknown) => void;
  refProp?: React.Ref<SelectInstance>;
  mode?: "brown" | "white";
}

const COR_PRIMARIA = "#AD7147";
const COR_BRANCA = "#FFFFFF";

const SelectComponent: React.FC<SelectProps> = ({
  name,
  options,
  onChange,
  placeholder,
  defaultValue,
  refProp,
  mode = "white",
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      name={name}
      onChange={(value) => onChange?.(value)}
      options={options}
      placeholder={placeholder}
      ref={refProp}
      styles={{
        control: (provided) => ({
          ...provided,
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
          }
        }),
        option: (provided) => ({
          ...provided,
          color: COR_PRIMARIA,
          backgroundColor: COR_BRANCA,
          ":hover": {
            backgroundColor: COR_PRIMARIA,
            color: COR_BRANCA,
          }
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
  );
};

export default SelectComponent;
