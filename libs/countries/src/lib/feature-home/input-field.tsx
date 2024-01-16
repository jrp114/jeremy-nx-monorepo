import classNames from 'classnames';

interface InputFieldProps {
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  darkMode: boolean;
  placeholder: string;
}

export function InputField(props: InputFieldProps) {
  return (
    <div className="tw-relative xs:tw-w-full sm:tw-w-96">
      <span className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3">
        <svg
          className={classNames('tw-h-5 tw-w-5', {
            'tw-fill-countries-dark-elemement tw-text-countries-dark-text':
              !props.darkMode,
            'tw-fill-countries-light-elemement tw-text-countries-light-text':
              props.darkMode,
          })}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
        </svg>
      </span>
      <input
        data-testid="search-input"
        className={classNames(
          'tw-w-full tw-border tw-border-slate-300 tw-py-2 tw-pl-10 tw-pr-4 focus:tw-outline-none',
          {
            'tw-bg-countries-dark-elemement tw-text-countries-dark-text':
              props.darkMode,
            'tw-bg-countries-light-elemement tw-text-countries-light-text':
              !props.darkMode,
          },
        )}
        placeholder={props.placeholder}
        type="text"
        onChange={props.handleSearchChange}
      />
    </div>
  );
}
