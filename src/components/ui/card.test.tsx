import { cleanup, render } from '@testing-library/react';
import { afterEach, expect, it } from 'vitest';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

afterEach(() => {
  cleanup();
});

it('should render card component', () => {
  const { getByRole } = render(
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
    </Card>
  );
  const cardTitleElement = getByRole('heading', { name: /Card Title/i });

  expect(cardTitleElement).toBeDefined();
});
