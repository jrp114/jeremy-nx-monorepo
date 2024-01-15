import { countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useDarkModeContext } from '@jeremy-nx-monorepo/shared/ui-components';
import { useCallback, useEffect, useRef, useState } from 'react';
import Layout from '../layout/layout';
import Card from './card';
import Dropdown, { DropdownOption } from './dropdown';
import { InputField } from './input-field';
import useDebounce from './useDebounce';

export function FeatureHome() {
  const [countries, setCountries] = useState<Array<countriesApi.Country>>([]);
  const [region, setRegion] = useState<string | null>(null);
  const { darkMode, toggleDarkMode } = useDarkModeContext();
  const ref = useRef<AbortController>();
  const debounce = useDebounce();

  useEffect(() => {
    countriesApi.all().then((res) => setCountries(res));
  }, []);

  const handleDropdownChange = useCallback((v: DropdownOption) => {
    setRegion(v.label);
    countriesApi.byRegion(v.value).then((res) => setCountries(res));
  }, []);

  const handleSearchChange = debounce(
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
    750
  );

  return (
    <Layout>
      <div className="tw-px-10">
        <div className="tw-flex tw-justify-between tw-py-10">
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

        <div className="tw-flex tw-flex-wrap tw-gap-12">
          {countries.map((country) => (
            <div key={country.name}>
              <Card country={country} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default FeatureHome;
