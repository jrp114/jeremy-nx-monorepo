import styles from './countries.module.css';

/* eslint-disable-next-line */
export interface AppCountriesProps {}

export function AppCountries(props: AppCountriesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to AppCountries!</h1>
    </div>
  );
}

export default AppCountries;
