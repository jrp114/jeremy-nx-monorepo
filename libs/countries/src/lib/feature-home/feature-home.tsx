import { Country, countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useEffect, useState } from 'react';
import Layout from '../layout/layout';
import Card from './card';

export function FeatureHome() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    countriesApi.all().then((res) => setCountries(res));
  }, []);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <div className="tw-flex tw-flex-wrap tw-gap-14 tw-p-14">
        {countries.map((country) => (
          <Card darkMode={darkMode} country={country} />
        ))}
      </div>
    </Layout>
  );
}

export default FeatureHome;
