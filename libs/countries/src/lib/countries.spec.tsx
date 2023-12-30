import { render } from '@testing-library/react';

import AppCountries from './countries';

describe('AppCountries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppCountries />);
    expect(baseElement).toBeTruthy();
  });
});
