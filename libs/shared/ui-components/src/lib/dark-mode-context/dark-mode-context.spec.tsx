import { render } from '@testing-library/react';

import DarkModeContext from './dark-mode-context';

describe('DarkModeContext', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DarkModeContext />);
    expect(baseElement).toBeTruthy();
  });
});
