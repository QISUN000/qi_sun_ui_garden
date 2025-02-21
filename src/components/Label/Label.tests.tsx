import { render, screen } from '@testing-library/react';
import { Label } from './Label';

describe('Label', () => {
  test('should be visible', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeVisible();
  });

  test('should have grey color when disabled', () => {
    render(<Label disabled>Disabled Label</Label>);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('color: #E5E7EB');
  });

  test('should have custom color when provided', () => {
    render(<Label color="#FF0000">Red Label</Label>);
    const label = screen.getByText('Red Label');
    expect(label).toHaveStyle('color: #FF0000');
  });
});