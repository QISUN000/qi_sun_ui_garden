import { ReactNode, CSSProperties } from 'react';

export interface CardProps {
  disabled?: boolean;
  backgroundColor?: string;
  children?: ReactNode;
  style?: CSSProperties;
}
