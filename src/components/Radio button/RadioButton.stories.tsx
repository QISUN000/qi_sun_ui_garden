import { useState } from 'react';
import type { Meta } from '@storybook/react';
import { RadioButton } from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Components/RadioButton',
};

export default meta;

// Create a proper React component for the Default story
const DefaultRadioButton = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <RadioButton
      id="radio1"
      name="radioGroup"
      label="Click me"
      checked={isChecked}
      onChange={(e) => setIsChecked(e.target.checked)}
    />
  );
};

export const Default = {
  render: () => <DefaultRadioButton />,
};

export const Disabled = {
  render: () => <RadioButton id="radio2" name="radioGroup" label="Disabled" disabled />,
};
