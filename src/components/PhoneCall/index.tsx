import classNames from 'classnames';
import React from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';

type PhoneCallProps = {
  phone?: string;
  tel?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const PhoneCall: React.FC<PhoneCallProps> = ({
  phone,
  tel,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      className={classNames(`flex items-center space-x-2.5 group`, className)}
      href={`tel:${tel}`}
    >
      <PhoneIcon className={classNames(`w-6 h-6`, iconClassName)} />
      <span
        className={classNames(
          `font-medium w-11/12 text-primary-main group-hover:underline underline-offset-4`,
          textClassName,
        )}
      >
        {phone}
      </span>
    </a>
  );
};

export default PhoneCall;
