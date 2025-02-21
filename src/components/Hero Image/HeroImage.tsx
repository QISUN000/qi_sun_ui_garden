import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroImageContainer = styled.div<{ imageUrl: string; disabled?: boolean }>`
  background-image: url(${(p) => p.imageUrl});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImageContent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
`;

export const HeroImage = ({ imageUrl, title, subtitle, disabled, onClick }: HeroImageProps) => {
  return (
    <HeroImageContainer imageUrl={imageUrl} disabled={disabled} onClick={!disabled ? onClick : undefined}>
      <HeroImageContent>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </HeroImageContent>
    </HeroImageContainer>
  );
};