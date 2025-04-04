import { UseFormReturn } from "react-hook-form";

export interface TextInputProps {
  name: string;
  label?: string;
  placeholder?: string;
  register: UseFormReturn["register"];
  required?: boolean;
  error?: string;
  disabled?: boolean;
  type?: string;
}