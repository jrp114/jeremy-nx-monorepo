import { Country, countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useCallback, useEffect, useState } from 'react';
import Layout from '../layout/layout';
import Card from './card';
import Dropdown, { DropdownOption } from './dropdown';

export function FeatureHome() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {
    countriesApi.all().then((res) => setCountries(res));
  }, []);

  const handleDropdownChange = useCallback((v: DropdownOption) => {
    setRegion(v.label);
    countriesApi.byRegion(v.value).then((res) => setCountries(res));
  }, []);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <div className="tw-flex tw-justify-between tw-px-14 tw-pt-6">
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
