import { render, screen, fireEvent } from '@testing-library/react';
import { HeroImage } from './HeroImage';

describe('HeroImage', () => {
  const handleClick = jest.fn();
  const defaultProps = {
    imageUrl: "xxx",
    title: "Welcome",
    subtitle: "Discover",
    onClick: handleClick
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render title and subtitle', () => {
    render(<HeroImage {...defaultProps} />);
    
    expect(screen.getByText('Welcome')).toBeVisible();
    expect(screen.getByText('Discover')).toBeVisible();
  });

  test('should handle click events', () => {
    render(<HeroImage {...defaultProps} />);
    
    // Click the container instead of looking for img role
    const container = screen.getByText('Welcome').closest('div');
    fireEvent.click(container!);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick when disabled', () => {
    render(<HeroImage {...defaultProps} disabled />);
    
    const container = screen.getByText('Welcome').closest('div');
    fireEvent.click(container!);
    
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('should apply correct styles when disabled', () => {
    const { container } = render(<HeroImage {...defaultProps} disabled />);
    
    
    const heroContainer = container.firstChild as HTMLElement;
    const styles = window.getComputedStyle(heroContainer);
    
    expect(heroContainer).toHaveStyle({
      opacity: '0.6',
      cursor: 'not-allowed'
    });
  });
});