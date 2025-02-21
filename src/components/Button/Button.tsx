import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 0.75rem 1.25rem;
  background: ${p => p.disabled ? '#E5E7EB' : p.backgroundColor || '#3B82F6'};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: ${p => p.backgroundColor ? p.backgroundColor : '#2563EB'}; 
  }

  &:focus-visible {
    outline: 2px solid #2563EB;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;

export const Button = ({ disabled = false, onClick, children, backgroundColor }: ButtonProps) => {
    return (
      <StyledButton 
        disabled={disabled} 
        onClick={onClick}
        backgroundColor={backgroundColor} 
      > 
        {children}
      </StyledButton>
    );
};