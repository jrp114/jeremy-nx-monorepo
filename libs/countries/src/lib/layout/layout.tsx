import classNames from 'classnames';

export interface LayoutProps {
  children: React.ReactNode;
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export function Layout(props: LayoutProps) {
  return (
    <div
      className={classNames('tw-font-nunito', {
        'tw-text-countries-dark-text': props.darkMode,
        'tw-text-countries-light-text': !props.darkMode,
      })}
    >
      <div
        className={classNames(
          'tw-py-4 tw-px-6 tw-flex tw-justify-between tw-items-center tw-top-0 tw-sticky',
          {
            'tw-bg-countries-dark-elemement': props.darkMode,
            'tw-bg-countries-light-elemement': !props.darkMode,
            'tw-border-b-2 tw-border-gray-200': !props.darkMode,
          }
        )}
      >
        <span className=" tw-text-xl tw-font-bold">Where in the world?</span>
        <button
          className="tw-flex tw-items-center tw-gap-2"
          onClick={() => props.setDarkMode(!props.darkMode)}
        >
          <svg viewBox="0 0 256 256">
            <path
              fill={props.darkMode ? '#fff' : '#000'}
              d="M134.1,245.9C65.7,245.9,10,190.2,10,121.8c0-47.4,26.4-90,68.9-111.1c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,1,5.7C77.8,33,73.8,49.9,73.8,67.6c0,63,51.2,114.2,114.2,114.2c17.8,0,34.9-4,50.8-11.9c1.9-0.9,4.2-0.6,5.7,0.9c1.5,1.5,1.9,3.8,0.9,5.7C224.4,219.3,181.8,245.9,134.1,245.9z"
            />
          </svg>
          Dark Mode
        </button>
      </div>
      <div
        className={classNames('tw-h-full tw-w-full', {
          'tw-bg-countries-dark-background': props.darkMode,
        })}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Layout;
