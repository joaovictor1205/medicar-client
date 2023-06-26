import { render } from '@testing-library/react';
import { AppointmentsTable } from '.';
import { AppointmentMock } from './__mocks__/AppointmentsMock';

describe('AppointmentsTable | component | unit test', () => {
  test('if data is displayed on screen', () => {
    const { getByText } = render(<AppointmentsTable data={AppointmentMock} mutate={jest.fn()} />);

    expect(getByText('Pediatria')).toBeVisible();
    expect(getByText('Test')).toBeVisible();
    expect(getByText('2022-02-01')).toBeVisible();
    expect(getByText('09:00')).toBeVisible();
  });
});
