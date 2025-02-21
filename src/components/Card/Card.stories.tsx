import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a default card.',
    backgroundColor: '#FFFFFF',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'This card is disabled.',
    disabled: true,
    backgroundColor: '#E5E7EB',
  },
};