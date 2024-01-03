import { mapCard } from './map-country';

export interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  region: string;
}

const countriesUrl = 'https://restcountries.com/v3.1';

export const countriesApi = {
  all: async function () {
    try {
      const countries = await fetch(
        countriesUrl + '/all?fields=name,capital,flags,population,region'
      );
      return countries
        .json()
        .then((data) => data.map((country: any) => mapCard(country)));
    } catch (error) {
      console.log(error);
      return [];
    }
  },
};
