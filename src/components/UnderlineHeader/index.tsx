import classNames from 'classnames';
import React from 'react';

type UnderlineHeaderProps = {
  heading: 'h1' | 'h2';
  title: string;
  className?: string;
  underlineClassName?: string;
  textClassName?: string;
};

const UnderlineHeader: React.FC<UnderlineHeaderProps> = ({
  heading,
  title,
  className,
  underlineClassName,
  textClassName,
}) => {
  return (
    <div
      className={classNames('flex flex-col items-center space-y-2', className)}
    >
      {heading === 'h1' ? (
        <h1 className={classNames('font-bold', textClassName)}>{title}</h1>
      ) : (
        <h2 className={classNames('font-bold', textClassName)}>{title}</h2>
      )}
      <div
        className={classNames(
          'h-0.5 rounded-md border-b border-primary-main w-1/2',
          underlineClassName,
        )}
      />
    </div>
  );
};

export default UnderlineHeader;
