export const FONT_SIZE: Record<string, string> = {
  small: "small",
  regular: "h4",
  large: "h3",
};

export const TITLE_POSITION: Record<string, string> = {
  left: "start",
  right: "end",
  center: "center",
};

export interface CardProps {
  title?: string;
  titleHtml?: React.ReactNode;
  titlePosition?: keyof typeof TITLE_POSITION;
  hasTitleDivisor?: boolean;
  children?: React.ReactNode;
  fontSize?: keyof typeof FONT_SIZE;
  cardClassName?: string;
  sideMarginColor?: string;
  onTitleClick?: () => void;
}
