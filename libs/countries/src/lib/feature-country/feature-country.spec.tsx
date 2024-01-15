import { render } from '@testing-library/react';

import FeatureCountry from './feature-country';

describe('FeatureCountry', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureCountry />);
    expect(baseElement).toBeTruthy();
  });
});
