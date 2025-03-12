import { render, screen } from '@testing-library/react';
import { Text } from './Text';

describe('Text', () => {
  const content = 'Sample Text';

  test('should render text content', () => {
    render(<Text>{content}</Text>);
    expect(screen.getByText(content)).toBeVisible();
  });

  test('should render with different variants', () => {
    render(<Text variant="h1">{content}</Text>);
    expect(screen.getByText(content)).toBeVisible();
  });

  test('should be visible when rendered', () => {
    render(<Text>{content}</Text>);
    const text = screen.getByTestId('text');
    expect(text).toBeVisible();
  });

  test('should have different color when disabled', () => {
    render(<Text disabled>{content}</Text>);
    const text = screen.getByTestId('text');
    expect(text).toHaveStyle('color: #9CA3AF');
  });
});
