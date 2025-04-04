import styled from 'styled-components';
import { CardProps } from './Card.types';

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  background: ${(p) => (p.disabled ? '#E5E7EB' : p.backgroundColor || '#FFFFFF')};
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 1.5rem;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 249, 4, 0.1);

  &:hover:not(:disabled) {
    box-shadow: 0 6px 8px rgba(255, 0, 0, 0.15);
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Card = ({ disabled, backgroundColor, children, style }: CardProps) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor} style={style}>
      {children}
    </StyledCard>
  );
};
