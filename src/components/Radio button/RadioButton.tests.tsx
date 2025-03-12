import { render, screen } from '@testing-library/react';
import { RadioButton } from './RadioButton';

describe('RadioButton', () => {
  test('should be visible', () => {
    render(<RadioButton id="radio1" name="radioGroup" label="Option 1" />);

    const radio = screen.getByRole('radio');
    const label = screen.getByText('Option 1');

    expect(radio).toBeInTheDocument();
    expect(label).toBeVisible();
  });

  test('should be disabled', () => {
    render(<RadioButton id="radio1" name="radioGroup" label="Option 1" disabled />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
  });
});
