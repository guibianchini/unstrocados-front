import React from "react";

import "./input.css";
import { Label } from "reactstrap";
import { TextInputProps } from "src/types/Text";

const TextComponent: React.FC<TextInputProps> = ({
  register,
  required,
  label,
  name,
  disabled,
  error,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <Label className="mb-0 text-primary fw-bold">{label}</Label>
      <input
        {...register(name, { required })}
        className="form-control"
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default TextComponent;
