import React from 'react';
import classNames from 'classnames';
import { MapPinIcon } from '@heroicons/react/24/solid';

type BranchCardType = {
  title?: string;
  address?: string;
  tel_display?: string;
  tel?: string;
  line_display?: string;
  line_url?: string;
  email?: string;
  className?: string;
};

const BranchCard: React.FC<BranchCardType> = ({
  title,
  address,
  tel,
  tel_display,
  line_url,
  line_display,
  email,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-between border border-neutral-300 rounded-lg p-6 h-52',
        className,
      )}
    >
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row items-center space-x-1">
          <MapPinIcon className="w-6 h-6 text-primary-main" />
          <h3 className="text-neutral-900 text-xl font-bold">{title}</h3>
        </div>
        <p className="text-sm text-neutral-900">{address}</p>
      </div>
      <div className="flex flex-col space-y-3">
        <div className="flex flex-row items-center space-x-4">
          <a href={`tel:${tel}`}>
            Tel:{' '}
            <span className="text-primary-main hover:underline unlderline-offset-4">
              {tel_display}
            </span>
          </a>
          <a target="__blank" href={line_url}>
            Line@:{' '}
            <span className="text-primary-main hover:underline unlderline-offset-4">
              {line_display}
            </span>
          </a>
        </div>
        <a
          href={`mailto:${email}`}
          className="flex flex-row items-center w-1/2"
        >
          Email:
          <span className="ml-1 text-primary-main hover:underline unlderline-offset-4">
            {email}
          </span>
        </a>
      </div>
    </div>
  );
};

export default BranchCard;
