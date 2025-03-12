import styled from 'styled-components';
import { TextProps } from './Text.types';

interface StyledTextProps {
  disabled?: boolean;
}

const variantStyles = {
  h1: 'font-size: 2.5rem; font-weight: 700;',
  h2: 'font-size: 2rem; font-weight: 700;',
  h3: 'font-size: 1.75rem; font-weight: 600;',
  h4: 'font-size: 1.5rem; font-weight: 600;',
  h5: 'font-size: 1.25rem; font-weight: 600;',
  h6: 'font-size: 1rem; font-weight: 600;',
  body: 'font-size: 1rem; font-weight: 400;',
  caption: 'font-size: 0.875rem; font-weight: 400;',
};

const StyledText = styled.div<StyledTextProps & { variant: TextProps['variant'] }>`
  ${(props) => variantStyles[props.variant || 'body']};
  color: ${(props) => (props.disabled ? '#9CA3AF' : 'inherit')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const Text = ({ children, variant = 'body', disabled = false }: TextProps) => {
  return (
    <StyledText variant={variant} disabled={disabled} data-testid="text">
      {children}
    </StyledText>
  );
};
