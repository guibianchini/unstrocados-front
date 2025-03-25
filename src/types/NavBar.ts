export interface NavbarOption {
  label: string;
  link?: string;
  onClick?: () => void;
}

export interface NavbarComponentProps {
  options: NavbarOption[];
  textColor?: "primary" | "white";
  selected: string;
}