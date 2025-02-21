import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.8;
  }
`;

export const Img = ({ src, alt, disabled, onClick }: ImgProps) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    />
  );
};