import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const mockHeaders = ['Name', 'Age', 'City'];
const mockRows = [
  ['John Doe', '30', 'New York'],
  ['Jane Smith', '25', 'Los Angeles'],
  ['Bob Johnson', '35', 'Chicago'],
  ['Alice Brown', '28', 'San Francisco'],
];

export const Default: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
  },
};

export const Disabled: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
    disabled: true,
  },
};

export const Empty: Story = {
  args: {
    headers: [],
    rows: [],
  },
};

export const SingleRow: Story = {
  args: {
    headers: mockHeaders,
    rows: [['John Doe', '30', 'New York']],
  },
};