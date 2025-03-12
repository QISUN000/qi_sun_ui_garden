import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.label<{ disabled?: boolean; color?: string }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${(p) => (p.disabled ? '#E5E7EB' : p.color || '#000')};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  padding: 0.2rem 0.4rem;
  background-color: ${(p) => (p.disabled ? '#F3F4F6' : 'transparent')};
  border-radius: 4px;
  border: 1px solid;
  display: inline-block;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background-color: ${(p) => (p.disabled ? '#F3F4F6' : '#F9FAFB')};
  }

  &:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export const Label = ({ children, disabled, color, htmlFor }: LabelProps) => {
  return (
    <StyledLabel disabled={disabled} color={color} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};
