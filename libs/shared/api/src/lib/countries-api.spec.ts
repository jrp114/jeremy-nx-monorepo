import { countriesApi } from './countries-api';

describe('countriesApi', () => {
  it('should work', () => {
    expect(countriesApi()).toEqual('countries-api');
  });
});
