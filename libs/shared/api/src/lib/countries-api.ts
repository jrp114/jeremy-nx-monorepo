import { mapCard, mapCountryDetail } from './map-country';

export interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  region: string;
  cca3: string;
}

export interface CountryDetail {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borders: string[];
  flag: string;
}

const url = 'https://restcountries.com/v3.1';

export async function all() {
  try {
    const countries = await fetch(
      `${url}/all?fields=name,capital,flags,population,region,cca3`
    );
    return countries
      .json()
      .then((data) => data.map((country: any) => mapCard(country)));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function byRegion(region: string) {
  const countries = await fetch(
    `${url}/region/${region}?fields=name,capital,flags,population,region,cca3`
  );
  return countries
    .json()
    .then((data) => data.map((country: any) => mapCard(country)));
}

export async function byName(name: string, signal: AbortSignal) {
  const countries = await fetch(
    `${url}/name/${name}?fields=name,capital,flags,population,region,cca3`,
    {
      signal,
    }
  );
  return countries
    .json()
    .then((data) => data.map((country: any) => mapCard(country)));
}

export async function byCode(code: string | null) {
  if (code) {
    try {
      const country = await fetch(`${url}/alpha/${code}`);
      return country.json().then((data) => mapCountryDetail(data[0]));
    } catch (error) {
      console.log(error);
      return null;
    }
  } else {
    return null;
  }
}
