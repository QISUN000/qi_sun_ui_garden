import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  const handleClick = jest.fn();

  test('should be visible', () => {
    render(<Button onClick={handleClick}>Click Me</Button>);
    expect(screen.getByRole('button')).toBeVisible();
  });

  test('should handle click events', () => {
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick when disabled', () => {
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('should have grey background when disabled', () => {
    render(
      <Button onClick={handleClick} disabled>
        Click Me
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('background: #E5E7EB');
  });
});
