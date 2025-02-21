import { render, screen, fireEvent } from '@testing-library/react';
import { Img } from './Img';

describe('Img', () => {
  const handleClick = jest.fn();

  test('should be visible', () => {
    render(<Img src="https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png" alt="Placeholder Image" onClick={handleClick} />);
    expect(screen.getByRole('img')).toBeVisible();
  });

  test('should handle click events', () => {
    render(<Img src="https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png" alt="Placeholder Image" onClick={handleClick} />);
    fireEvent.click(screen.getByRole('img'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('should not call onClick when disabled', () => {
    render(<Img src="https://miro.medium.com/v2/resize:fit:1400/1*GI-td9gs8D5OKZd19mAOqA.png" alt="Placeholder Image" disabled onClick={handleClick} />);
    fireEvent.click(screen.getByRole('img'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});