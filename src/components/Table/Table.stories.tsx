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
const mockFooter = ['Total: 4 entries'];

export const Default: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
  },
};

export const WithFooter: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
    footer: mockFooter,
  },
};

export const WithDetailedFooter: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
    footer: ['Total', '4 entries', 'Last updated: Today'],
  },
};

export const Disabled: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
    disabled: true,
  },
};

export const DisabledWithFooter: Story = {
  args: {
    headers: mockHeaders,
    rows: mockRows,
    disabled: true,
    footer: mockFooter,
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