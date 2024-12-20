import React from 'react';
import { Link } from 'gatsby-plugin-react-i18next';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import classNames from 'classnames';

type NewsCardProps = {
  coverImage?: IGatsbyImageData;
  title?: string;
  description?: string;
  createdAt?: string;
  href?: string;
  className?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({
  coverImage,
  title,
  description,
  createdAt,
  href,
  className,
}) => {
  return (
    <Link to={href || ''} className={classNames(`group`, className)}>
      <article className="space-y-2.5 cover-lg">
        <div className="!aspect-w-16 !aspect-h-9">
          {coverImage && (
            <GatsbyImage
              alt={title || ''}
              image={coverImage}
              className="object-cover w-full h-full"
            />
          )}
        </div>
        <span className="block text-sm text-neutral-900">{createdAt}</span>
        <h3 className="text-lg font-medium text-neutral-900 line-clamp-2 group-hover:text-primary-main dealy-100">
          {title}
        </h3>
        <span className="line-clamp-2 text-sm text-neutral-600 !mt-1">
          {description}
        </span>
      </article>
    </Link>
  );
};

export default NewsCard;
