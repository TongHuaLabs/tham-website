import classNames from 'classnames';
import React from 'react';

type PrimaryButtonProps = {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  leftIcon,
  rightIcon,
  className,
}) => {
  return (
    <button
      className={classNames(
        'flex items-center space-x-1 bg-primary-main text-neutral-50 font-semibold px-4 py-2 rounded delay-100 hover:bg-primary-hover',
        className,
      )}
    >
      {leftIcon}
      <span>{title}</span>
      {rightIcon}
    </button>
  );
};

export default PrimaryButton;
