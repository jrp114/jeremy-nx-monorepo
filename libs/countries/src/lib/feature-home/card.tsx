import { Country } from '@jeremy-nx-monorepo/shared/api';
import classNames from 'classnames';

export interface CardProps {
  darkMode: boolean;
  country: Country;
}

export function Card(props: CardProps) {
  return (
    <div
      className={classNames('tw-shadow-xl tw-w-72', {
        'tw-bg-countries-dark-elemement': props.darkMode,
        'tw-bg-countries-light-elemement': !props.darkMode,
      })}
    >
      <div className="tw-h-36 tw-w-full tw-bg-cover tw-bg-center tw-bg-no-repeat tw-shadow-md">
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
