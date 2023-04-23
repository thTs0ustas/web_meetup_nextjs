import { PropsWithChildren } from 'react';

type Props = {
  onClick: () => void;
  disabled: boolean;
};

const Button = ({ onClick, disabled, children }: PropsWithChildren<Props>) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-32 rounded bg-purple-600 px-5 py-3 text-lg disabled:bg-purple-900 disabled:text-gray-300"
  >
    {children}
  </button>
);

export default Button;
