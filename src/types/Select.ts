import { SelectInstance } from "react-select";

export interface SelectOption {
  label: string;
  value: string | number | boolean;
}

export interface SelectProps {
  name: string;
  label?: string;
  options: SelectOption[];
  defaultValue?: SelectOption;
  placeholder?: string;
  isClearable?: boolean;
  id?: string;
  onChange?: (value: unknown) => void;
  refProp?: React.Ref<SelectInstance>;
  mode?: "brown" | "white";
}