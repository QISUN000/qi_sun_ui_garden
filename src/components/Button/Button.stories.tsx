import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' }, 
    disabled: { control: 'boolean' }, 
    onClick: { action: 'clicked' }, 
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Click Me',
    backgroundColor: '#3B82F6', 
    disabled: false, 
  },
};

export const Disabled: Story = {
  args: {
    children: 'Cant Click',
    disabled: true,
    backgroundColor: '#E5E7EB', 
  },
};