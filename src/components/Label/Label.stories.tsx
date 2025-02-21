import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
  argTypes: {
    disabled: { control: 'boolean' },
    color: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'This is a label',
    disabled: false,
    color: '#000',
  },
};

export const Disabled: Story = {
  args: {
    children: 'This is a disabled label',
    disabled: true,
    color: '#E5E7EB',
  },
};