import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const Button = ({ children, className = '', disabled }: ButtonProps) => (
  <button
    type="button"
    className={`flex flex-row justify-center px-8 py-4 text-white items-center border-4 border-black cursor-pointer shadow-[inset_-0.4rem_-0.4rem_0px_#1c1d30,inset_0.4rem_0.4rem_0px_#444a71] bg-pale-600 ${
      disabled ? 'cursor-default' : 'hover:text-gold-400 hover:border-gold-500'
    } ${className ?? ''}`}
    disabled={disabled ?? false}
  >
    {children}
  </button>
);

Button.defaultProps = {
  className: '',
  disabled: false,
};

export default Button;
