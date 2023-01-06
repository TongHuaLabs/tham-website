import classNames from 'classnames';
import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

type MailToProps = {
  mail?: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const MailTo: React.FC<MailToProps> = ({
  mail,
  className,
  iconClassName,
  textClassName,
}) => {
  return (
    <a
      className={classNames(`flex items-center space-x-2.5 group`, className)}
      href={`mailto:${mail}`}
    >
      <EnvelopeIcon
        className={classNames(
          `w-6 h-6 group-hover:text-primary-main`,
          iconClassName,
        )}
      />
      <span
        className={classNames(
          `font-medium group-hover:text-primary-main w-11/12`,
          textClassName,
        )}
      >
        {mail}
      </span>
    </a>
  );
};

export default MailTo;
