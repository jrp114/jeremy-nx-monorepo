import { Country, countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../layout/layout';
import Card from './card';
import Dropdown, { DropdownOption } from './dropdown';
import { InputField } from './input-field';

export function FeatureHome() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [region, setRegion] = useState<string | null>(null);
  const ref = useRef<AbortController>();

  useEffect(() => {
    countriesApi.all().then((res) => setCountries(res));
  }, []);

  const handleDropdownChange = useCallback((v: DropdownOption) => {
    countriesApi.byRegion(v.value).then((res) => setCountries(res));
  }, []);

  const handleSearchChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      // we'll abort any previous request
      if (ref.current) {
        ref.current.abort();
      }
      // we'll create a new AbortController for each request
      ref.current = new AbortController();
      const signal = ref.current.signal;
      if (e.target.value !== '') {
        countriesApi
          .byName(e.target.value, signal)
          .then((res) => setCountries(res))
          .catch(() => {});
      } else {
        const res = await countriesApi.all();
        setCountries(res);
      }
    },
    []
  );

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <div className="tw-flex tw-justify-between tw-px-14 tw-pt-6">
        <InputField
          darkMode={darkMode}
          handleSearchChange={handleSearchChange}
          placeholder="Search for a country..."
        />
        <Dropdown
          classes={
            darkMode
              ? 'tw-bg-countries-dark-elemement'
              : 'tw-bg-countries-light-elemement'
          }
          options={[
            { label: 'Americas', value: 'americas', key: 'americas' },
            {
              label: 'Africa',
              value: 'africa',
              key: 'africa',
            },
            { label: 'Asia', value: 'asia', key: 'asia' },
            { label: 'Europe', value: 'europe', key: 'europe' },
            {
              label: 'Oceania',
              value: 'oceania',
              key: 'oceania',
            },
          ]}
          handleClick={handleDropdownChange}
          label={region || 'Filter by Region'}
        />
      </div>

      <div className="tw-flex tw-flex-wrap tw-gap-14 tw-p-14">
        {countries.map((country) => (
          <div key={country.name}>
            <Card darkMode={darkMode} country={country} />
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default FeatureHome;
