import { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const Button = ({ onClick, disabled, children }: PropsWithChildren<Props>) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-32 rounded bg-purple-600 px-4 py-2 text-xs disabled:bg-purple-900 disabled:text-gray-300 sm:text-base lg:text-lg"
  >
    {children}
  </button>
);

export default Button;
