import React from 'react';
import FacebookSVG from '@/icons/facebook.inline.svg';
import LineSVG from '@/icons/line.inline.svg';
import LinkedinSVG from '@/icons/linkedin.inline.svg';
import classNames from 'classnames';

type SocialProps = {
  className?: string;
  iconClassName?: string;
  backgroundClassName?: string;
};

const Social: React.FC<SocialProps> = ({
  className,
  iconClassName,
  backgroundClassName,
}) => {
  const socials = [
    {
      icon: <FacebookSVG className={iconClassName} />,
      href: 'https://www.facebook.com/thamcthailand',
    },
    {
      icon: <LineSVG className={iconClassName} />,
      href: 'https://lin.ee/ucHUbTC',
    },
    {
      icon: <LinkedinSVG className={iconClassName} />,
      href: 'https://www.linkedin.com/company/tonghuaholding',
    },
  ];

  return (
    <div className={classNames('flex items-center', className)}>
      {socials.map(({ icon, href }, key) => (
        <a
          href={href}
          target="__blank"
          className={classNames(
            'rounded-full flex justify-center items-center',
            backgroundClassName,
          )}
          key={key}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
