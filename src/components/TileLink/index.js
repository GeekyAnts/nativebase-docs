import React from 'react';
import Link from '@docusaurus/Link';

export default function TileLink({
  title,
  description,
  className = '',
  url,
  imgSrc,
  imgStyle,
  titleClassName = 'text-white',
  descriptionClassName = 'text-gray-100',
}) {
  return (
    <Link
      to={url}
      className={
        'relative overflow-hidden no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 ' +
        className
      }
    >
      <div className={'font-bold text-md mb-2 ' + titleClassName}>{title}</div>
      <p className={' text-sm leading-5 ' + descriptionClassName}>
        {description}
      </p>
      <div
        className="absolute h-20 w-20"
        style={imgStyle ? imgStyle : { right: -20, top: -10 }}
      >
        {imgSrc && <img src={imgSrc}></img>}
      </div>
    </Link>
  );
}
