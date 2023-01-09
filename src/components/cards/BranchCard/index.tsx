import React from 'react';
import classNames from 'classnames';
import { MapPinIcon } from '@heroicons/react/24/solid';

type BranchCardType = {
  branch?: string;
  location?: string;
  tel?: string;
  line?: string;
  email?: string;
  className?: string;
};

const BranchCard: React.FC<BranchCardType> = ({
  branch,
  location,
  tel,
  line,
  email,
  className,
}) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center border border-neutral-300 rounded-lg p-6 space-y-3',
        className,
      )}
    >
      <div className="flex flex-row items-center space-x-1">
        <MapPinIcon className="w-6 h-6 text-primary-main" />
        <h3 className="text-neutral-900 text-xl font-bold">{branch}</h3>
      </div>
      <p className="text-sm text-neutral-900">{location}</p>
      <div className="flex flex-row items-center">
        <a href={`tel:${tel}`} className="w-1/2">
          Tel:{' '}
          <span className="text-primary-main hover:underline unlderline-offset-4">
            {tel}
          </span>
        </a>
        <a href={`tel:${line}`} className="w-1/2">
          Line@:{' '}
          <span className="text-primary-main hover:underline unlderline-offset-4">
            {line}
          </span>
        </a>
      </div>
      <a href={`mailto:${email}`} className="flex flex-row items-center w-1/2">
        Email:
        <span className="ml-1 text-primary-main hover:underline unlderline-offset-4">
          {email}
        </span>
      </a>
    </div>
  );
};

export default BranchCard;
