import classNames from 'classnames';
import { useState } from 'react';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="tw-font-nunito">
      <div
        className={classNames(
          'tw-py-4 tw-px-6 tw-flex tw-justify-between tw-items-center',
          {
            'tw-bg-countries-dark-elemement tw-text-countries-dark-text':
              darkMode,
            'tw-border-b-2 tw-border-gray-200': !darkMode,
          }
        )}
      >
        <span className=" tw-text-xl tw-font-bold">Where in the world?</span>
        <button
          className={classNames(
            'tw-flex tw-items-center tw-gap-2 tw-text-countries-dark-text',
            {
              'tw-text-countries-light-text': !darkMode,
            }
          )}
          onClick={() => setDarkMode(!darkMode)}
        >
          <svg viewBox="0 0 256 256">
            <path
              fill={darkMode ? '#fff' : '#000'}
              d="M134.1,245.9C65.7,245.9,10,190.2,10,121.8c0-47.4,26.4-90,68.9-111.1c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,1,5.7C77.8,33,73.8,49.9,73.8,67.6c0,63,51.2,114.2,114.2,114.2c17.8,0,34.9-4,50.8-11.9c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,0.9,5.7C224.4,219.3,181.8,245.9,134.1,245.9z"
            />
          </svg>
          Dark Mode
        </button>
      </div>
      <div
        className={classNames('tw-h-screen tw-w-screen', {
          ' tw-bg-countries-dark-background tw-text-countries-dark-text':
            darkMode,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
