import { Country } from './countries-api';

export const mapCard = (country: any): Country => {
  return {
    name: country.name.common,
    capital: country.capital.join(', '),
    flag: country.flags.svg,
    population: country.population.toLocaleString('en-US'),
    region: country.region,
  };
};
