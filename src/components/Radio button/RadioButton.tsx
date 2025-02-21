import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const RadioButtonContainer = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
`;

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const CustomRadio = styled.div<{ checked?: boolean; disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${(p) => (p.disabled ? '#E5E7EB' : '#3B82F6')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  &:after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(p) => (p.disabled ? '#E5E7EB' : '#3B82F6')};
    display: ${(p) => (p.checked ? 'block' : 'none')};
  }
`;

const LabelText = styled.span`
  margin-left: 4px;
`;

export const RadioButton = ({ 
  id, 
  name, 
  checked = false, 
  disabled = false, 
  onChange, 
  label 
}: RadioButtonProps) => (
  <RadioButtonContainer disabled={disabled}>
    <HiddenInput
      type="radio"
      id={id}
      name={name}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <CustomRadio checked={checked} disabled={disabled} />
    <LabelText>{label}</LabelText>
  </RadioButtonContainer>
);