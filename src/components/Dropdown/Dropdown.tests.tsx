import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const handleSelect = jest.fn();

  test('should be visible', () => {
    render(<Dropdown options={options} onSelect={handleSelect} />);

    const dropdownButton = screen.getByText('Select an option');
    expect(dropdownButton).toBeVisible();
  });

  test('should be disabled', () => {
    render(<Dropdown options={options} onSelect={handleSelect} disabled />);

    const dropdownButton = screen.getByText('Select an option');
    expect(dropdownButton).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed',
    });
  });
});
