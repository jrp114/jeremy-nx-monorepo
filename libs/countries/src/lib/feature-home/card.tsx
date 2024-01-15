import { countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useDarkModeContext } from '@jeremy-nx-monorepo/shared/ui-components';
import classNames from 'classnames';
import { useNavigate } from 'react-router';

export interface CardProps {
  country: countriesApi.Country;
}

export function Card(props: CardProps) {
  const navigate = useNavigate();
  const { darkMode } = useDarkModeContext();
  return (
    <div
      onClick={() => navigate(`/country?code=${props.country.cca3}`)}
      className={classNames(
        'tw-shadow-xl tw-h-[350px] tw-w-72 tw-cursor-pointer',
        {
          'tw-bg-countries-dark-elemement': darkMode,
          'tw-bg-countries-light-elemement': !darkMode,
        }
      )}
    >
      <div className=" tw-h-44 tw-w-full tw-bg-cover tw-bg-center tw-bg-no-repeat tw-border tw-border-gray-300 tw-shadow-md">
        <img
          className="tw-self-stretch tw-object-cover tw-h-full tw-w-full"
          src={props.country.flag}
          alt={props.country.name}
        />
      </div>
      <div className="tw-p-6 tw-py-4">
        <div className="tw-text-lg tw-font-extrabold tw-pb-3">
          {props.country.name}
        </div>
        <div className="tw-text-sm">
          <span className="tw-font-semibold">Population: </span>
          {props.country.population}
        </div>
        <div className="tw-text-sm">
          <span className="tw-font-semibold">Region: </span>
          {props.country.region}
        </div>
        <div className="tw-text-sm">
          <span className="tw-font-semibold">Capital: </span>
          {props.country.capital}
        </div>
      </div>
    </div>
  );
}

export default Card;
