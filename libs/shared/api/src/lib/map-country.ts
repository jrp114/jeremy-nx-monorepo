import { Country, CountryDetail } from './countries-api';

export const mapCard = (country: any): Country => {
  return {
    name: country.name.common,
    capital: country.capital.join(', '),
    flag: country.flags.svg,
    population: country.population.toLocaleString('en-US'),
    region: country.region,
    cca3: country.cca3,
  };
};

export const mapCountryDetail = (country: any): CountryDetail => {
  return {
    name: country.name.common,
    nativeName: Object.keys(country.name.nativeName)
      .map((k) => country.name.nativeName[k].common)
      .join(', '),
    population: country.population.toLocaleString('en-US'),
    region: country.region,
    subRegion: country.subregion,
    capital: country.capital.join(', '),
    topLevelDomain: country.tld.join(', '),
    currencies: Object.keys(country.currencies)
      .map((k) => country.currencies[k].name)
      .join(', '),
    languages: Object.keys(country.languages)
      .map((k) => country.languages[k])
      .join(', '),
    borders: country.borders,
    flag: country.flags.svg,
  };
};
