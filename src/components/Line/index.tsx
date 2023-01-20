import classNames from 'classnames';
import React from 'react';
import LineSVG from '@/icons/line.inline.svg';

type LineProps = {
  line?: string;
  url?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const Line: React.FC<LineProps> = ({
  line,
  url,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      target="__blank"
      className={classNames(`flex items-center space-x-2.5 group`, className)}
      href={url}
    >
      <LineSVG className={classNames(`w-6 h-6`, iconClassName)} />
      <span
        className={classNames(
          `font-medium w-11/12 text-primary-main group-hover:underline underline-offset-4`,
          textClassName,
        )}
      >
        {line}
      </span>
    </a>
  );
};

export default Line;
