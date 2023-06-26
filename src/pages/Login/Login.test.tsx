import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '.';

describe('Login | component | unit test', () => {
  test('if text is displayed on screen', () => {
    const { getAllByText } = render(<BrowserRouter><Login /></BrowserRouter>);

    expect(getAllByText('E-mail ou Login')[0]).toBeVisible();
    expect(getAllByText('Senha')[0]).toBeVisible();
  });
});
