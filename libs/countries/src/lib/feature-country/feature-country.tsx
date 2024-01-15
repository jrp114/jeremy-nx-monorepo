import { countriesApi } from '@jeremy-nx-monorepo/shared/api';
import { useDarkModeContext } from '@jeremy-nx-monorepo/shared/ui-components';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layout/layout';

const DetailSection = (props: { label: string; value: string | number }) => (
  <div className="tw-flex tw-gap-2">
    <span className="tw-font-bold">{props.label}</span>
    {props.value}
  </div>
);

export interface FeatureCountryProps {}

export function FeatureCountry(props: FeatureCountryProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [country, setCountry] = useState<countriesApi.CountryDetail | null>(
    null
  );
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  useEffect(() => {
    countriesApi.byCode(queryParams.get('code')).then((country) => {
      setCountry(country);
    });
  }, [queryParams]);

  return (
    <Layout>
      <div className="tw-h-screen tw-px-10">
        <div className="tw-py-10">
          <button
            onClick={() => navigate(-1)}
            className={classNames(
              'tw-flex tw-flex-row tw-items-center tw-gap-2 tw-py-2 tw-px-6 tw-rounded tw-shadow-md tw-border tw-border-gray-300',
              {
                'tw-bg-countries-dark-elemement tw-text-countries-dark-text':
                  darkMode,
                'tw-bg-countries-light-elemement tw-text-countries-light-text':
                  !darkMode,
              }
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
              className="tw-fill-current"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
            Back
          </button>
        </div>

        <div className="tw-flex tw-flex-row tw-items-center tw-gap-20 tw-text-countries-light-text">
          <div className="tw-border tw-border-gray-300 tw-shadow-md">
            <img
              className="tw-max-w-[600px] tw-max-h-[500px] tw-object-cover"
              src={country?.flag}
              alt={country?.name}
            />
          </div>
          <div
            className={classNames('tw-flex tw-flex-col tw-gap-6', {
              'tw-text-countries-dark-text': darkMode,
              ' tw-text-countries-light-text': !darkMode,
            })}
          >
            <div className="tw-font-bold tw-text-2xl">{country?.name}</div>
            <div className="tw-flex tw-flex-row tw-gap-20">
              <div className="tw-flex tw-flex-col tw-gap-3">
                <DetailSection
                  label="Native Name:"
                  value={country?.nativeName!}
                />
                <DetailSection
                  label="Population:"
                  value={country?.population!}
                />
                <DetailSection label="Region:" value={country?.region!} />
                <DetailSection
                  label="Sub Region:"
                  value={country?.subRegion!}
                />
                <DetailSection label="Capital:" value={country?.capital!} />
              </div>
              <div className="tw-flex tw-flex-col tw-gap-3">
                <DetailSection
                  label="Top Level Domain:"
                  value={country?.topLevelDomain!}
                />
                <DetailSection
                  label="Currencies:"
                  value={country?.currencies!}
                />
                <DetailSection label="Languages:" value={country?.languages!} />
              </div>
            </div>
            <div className="tw-pt-12 tw-flex tw-items-center tw-gap-2">
              <span className="tw-font-bold">Border Countries:</span>
              <div className="tw-flex tw-flex-row tw-gap-2 tw-flex-wrap">
                {country?.borders?.map((border) => (
                  <button
                    onClick={() => navigate(`/country?code=${border}`)}
                    className="tw-flex tw-flex-row tw-items-center tw-gap-2 tw-py-1 tw-px-6 tw-rounded tw-bg-countries-light-elemement tw-text-countries-light-text tw-shadow-md tw-border tw-border-gray-300"
                  >
                    {border.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FeatureCountry;
