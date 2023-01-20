import React from 'react';
import classNames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';

type MissionCardType = {
  title?: string;
  desc?: string;
  icon?: GatsbyTypes.ImageSharp['gatsbyImageData'];
  className?: string;
};

const MissionCard: React.FC<MissionCardType> = ({
  title,
  desc,
  icon,
  className,
}) => {
  return (
    <div className={classNames('flex flex-col justify-center', className)}>
      <div className="w-max h-max p-3 rounded-lg bg-primary-border bg-opacity-20">
        {icon && (
          <GatsbyImage alt={title || ''} image={icon} className="w-10 h-10" />
        )}
      </div>
      <div className="mt-6">
        <span className="text-2xl text-primary-main font-bold">{title}</span>
        <p className="text-nuetral-900 line-clamp-4 mt-2">{desc}</p>
      </div>
    </div>
  );
};

export default MissionCard;
