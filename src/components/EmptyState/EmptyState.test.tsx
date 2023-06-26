import { render } from '@testing-library/react';
import { EmptyState } from '.';

describe('EmptyState | component | unit test', () => {
  test('if text is displayed on screen', () => {
    const { getByText } = render(<EmptyState />);

    expect(getByText('No momento não há consultas cadastradas')).toBeVisible();
  });
});
