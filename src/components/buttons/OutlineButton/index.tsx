import classNames from 'classnames';
import React from 'react';

type OutlineButtonProps = {
  title?: string;
  onClick?: () => void;
  className?: string;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames('border py-1.5 rounded-lg px-4', className)}
    >
      {title}
    </button>
  );
};

export default OutlineButton;
