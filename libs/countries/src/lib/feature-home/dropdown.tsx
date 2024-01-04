import { ReactNode, useState } from 'react';

export interface DropdownOption {
  key: string;
  value: string;
  label: string;
}

interface DropdownProps {
  label: string | ReactNode;
  options: Array<DropdownOption>;
  handleClick: (v: DropdownOption) => void;
  classes?: string;
}

/**
 * Dropdown component can be used to display a dropdown with options and a label for the dropdown button itself.
 * The options are passed as an array of objects with a key, value and label. The handleClick function is called
 * when an option is clicked and the classes prop can be used to add additional classes to the dropdown button
 * and the dropdown itself.
 */
export default function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="tw-relative">
      <button
        onClick={() => setOpen(!open)}
        className={`${props.classes} tw-shadow-md tw-rounded-sm tw-py-2 tw-px-4 tw-w-full tw-flex tw-items-center tw-gap-8 tw-text-sm`}
      >
        {props.label}
        <div className="tw-w-4 tw-h-4">
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>
      {open && (
        <div
          className={`${props.classes} tw-absolute tw-w-full tw-shadow-md tw-rounded-sm tw-py-2 tw-mt-1`}
        >
          {props.options.map((option) => (
            <div
              key={option.key}
              onClick={() => {
                setOpen(false);
                props.handleClick(option);
              }}
              className="tw-py-1 tw-text-sm tw-cursor-pointer hover:tw-bg-gray-100 hover:tw-text-black tw-px-4"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
