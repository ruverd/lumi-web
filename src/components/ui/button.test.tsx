import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';

import { Button } from '@/components/ui/button';

afterEach(() => {
  cleanup();
});

it('should render button component', () => {
  const { getByRole } = render(<Button>Button</Button>);
  const buttonElement = getByRole('button');

  expect(buttonElement).toBeDefined();
});

it('should be able to click button', () => {
  let clicked = false;
  const handleClick = () => {
    clicked = true;
  };

  const { getByRole } = render(<Button onClick={handleClick}>Button</Button>);
  const buttonElement = getByRole('button');

  fireEvent.click(buttonElement);

  expect(clicked).toBe(true);
});

it('should render label', () => {
  const { getByText } = render(<Button>Button</Button>);
  const buttonElement = getByText('Button');

  expect(buttonElement).toBeDefined();
});
