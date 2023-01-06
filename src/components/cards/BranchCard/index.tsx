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
      <div className="flex flex-row items-center space-x-3">
        <MapPinIcon className="w-6 h-6 text-primary-main" />
        <h3 className="text-primary-main text-lg font-bold">{branch}</h3>
      </div>
      <p className="text-sm text-neutral-900">{location}</p>
      <div className="flex flex-row items-center">
        <p className="w-1/2">Tel: {tel}</p>
        <p className="w-1/2">Line@: {line}</p>
      </div>
      <p>Email: {email}</p>
    </div>
  );
};

export default BranchCard;
