import { render } from '@testing-library/react';
import { CustomAlert } from '.';

describe('CustomAlert | component | unit test', () => {
  test('if texts are displayed on screen', () => {
    const { getByText } = render(<CustomAlert severity="error" text="Text test" title="Title test" />);

    expect(getByText('Text test')).toBeVisible();
    expect(getByText('Title test')).toBeVisible();
  });
});
