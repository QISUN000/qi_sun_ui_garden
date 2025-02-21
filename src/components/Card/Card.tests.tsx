import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  test('should be visible', () => {
    render(<Card>Test Card</Card>);
    expect(screen.getByText('Test Card')).toBeVisible();
  });

  test('should have grey background when disabled', () => {
    render(<Card disabled>Disabled Card</Card>);
    const card = screen.getByText('Disabled Card');
    expect(card).toHaveStyle('background: #E5E7EB');
  });
});