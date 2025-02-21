import { render, screen } from '@testing-library/react';
import { Table } from './Table';

describe('Table', () => {
  const headers = ['Header 1', 'Header 2', 'Header 3'];
  const rows = [
    ['Row 1, Cell 1', 'Row 1, Cell 2', 'Row 1, Cell 3'],
    ['Row 2, Cell 1', 'Row 2, Cell 2', 'Row 2, Cell 3'],
  ];

  test('should render headers', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText('Header 1')).toBeVisible();
    expect(screen.getByText('Header 2')).toBeVisible();
    expect(screen.getByText('Header 3')).toBeVisible();
  });

  test('should render rows', () => {
    render(<Table headers={headers} rows={rows} />);
    expect(screen.getByText('Row 1, Cell 1')).toBeVisible();
    expect(screen.getByText('Row 2, Cell 2')).toBeVisible();
  });

  test('should be visible when rendered', () => {
    render(<Table headers={headers} rows={rows} />);
    const table = screen.getByTestId('table');
    expect(table).toBeVisible();
  });

  test('should have different background color when disabled', () => {
    render(<Table headers={headers} rows={rows} disabled />);
    const table = screen.getByTestId('table');
    expect(table).toHaveStyle('background-color: #F3F4F6');
  });
});