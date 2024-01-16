import { ReactNode, useRef, useState } from 'react';
import { useOutsideClick } from './useOutsideClick';

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
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => setOpen(false));

  return (
    <div ref={ref} className="tw-relative">
      <button
        onClick={() => setOpen(!open)}
        className={`${props.classes} tw-flex tw-items-center tw-justify-between tw-gap-8 tw-rounded-sm tw-py-2 tw-px-4 tw-text-sm tw-shadow-md`}
      >
        {props.label}
        <div className="tw-h-4 tw-w-4">
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
          className={`${props.classes} tw-absolute tw-mt-1 tw-rounded-sm tw-py-2 tw-shadow-md`}
        >
          {props.options.map((option) => (
            <div
              key={option.key}
              onClick={() => {
                setOpen(false);
                props.handleClick(option);
              }}
              className="tw-cursor-pointer tw-py-1 tw-px-4 tw-text-sm hover:tw-bg-gray-100 hover:tw-text-black"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
