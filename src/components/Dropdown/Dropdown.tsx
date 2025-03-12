import React, { useState } from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const DropdownContainer = styled.div<{ $disabled?: boolean }>`
  position: relative;
  display: inline-block;
  cursor: ${(p) => (p.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  padding: 0.75rem 1.25rem;
  background-color: ${(p) => (p.$disabled ? '#E5E7EB' : '#3B82F6')};
  color: white;
  border-radius: 4px;

  &:hover:not(:disabled) {
    background: ${'#2563EB'};
  }
`;

const DropdownList = styled.ul<{ $isOpen: boolean }>`
  display: ${(p) => (p.$isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  top: 100%;
  left: 0;
`;

const DropdownItem = styled.li`
  padding: 0.75rem 1rem;
  color: black;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const Dropdown = ({ options, disabled, onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option: string) => {
    if (!disabled) {
      onSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <DropdownContainer $disabled={disabled} onClick={handleToggle}>
      Select an option
      <DropdownList $isOpen={isOpen}>
        {options.map((option, index) => (
          <DropdownItem
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              handleSelect(option);
            }}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};
