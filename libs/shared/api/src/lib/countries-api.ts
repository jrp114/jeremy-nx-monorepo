import { mapCard } from './map-country';

export interface Country {
  flag: string;
  name: string;
  capital: string;
  population: number;
  region: string;
}

const url = 'https://restcountries.com/v3.1';

export async function all() {
  try {
    const countries = await fetch(
      `${url}/all?fields=name,capital,flags,population,region`,
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
    `${url}/region/${region}?fields=name,capital,flags,population,region`,
  );
  return countries
    .json()
    .then((data) => data.map((country: any) => mapCard(country)));
}

export async function byName(name: string, signal: AbortSignal) {
  const countries = await fetch(
    `${url}/name/${name}?fields=name,capital,flags,population,region`,
    {
      signal,
    },
  );
  return countries
    .json()
    .then((data) => data.map((country: any) => mapCard(country)));
}
