import { useDarkModeContext } from '@jeremy-nx-monorepo/shared/ui-components';
import classNames from 'classnames';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  const { darkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <div
      className={classNames('tw-font-nunito', {
        'tw-text-countries-dark-text': darkMode,
        'tw-text-countries-light-text': !darkMode,
      })}
    >
      <div
        className={classNames(
          'tw-py-4 tw-px-6 tw-flex tw-justify-between tw-items-center tw-top-0 tw-sticky tw-z-10',
          {
            'tw-bg-countries-dark-elemement': darkMode,
            'tw-bg-countries-light-elemement': !darkMode,
            'tw-border-b-2 tw-border-gray-200': !darkMode,
          }
        )}
      >
        <span className=" tw-text-xl tw-font-bold">Where in the world?</span>
        <button
          className="tw-flex tw-items-center tw-gap-2"
          onClick={() => toggleDarkMode()}
        >
          <div className="tw-w-4 tw-h-4">
            <svg viewBox="0 0 256 256">
              <path
                fill={darkMode ? '#fff' : '#000'}
                d="M134.1,245.9C65.7,245.9,10,190.2,10,121.8c0-47.4,26.4-90,68.9-111.1c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,1,5.7C77.8,33,73.8,49.9,73.8,67.6c0,63,51.2,114.2,114.2,114.2c17.8,0,34.9-4,50.8-11.9c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,0.9,5.7C224.4,219.3,181.8,245.9,134.1,245.9z"
              />
            </svg>
          </div>
          Dark Mode
        </button>
      </div>
      <div
        className={classNames('tw-h-full tw-w-full', {
          'tw-bg-countries-dark-background': darkMode,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
