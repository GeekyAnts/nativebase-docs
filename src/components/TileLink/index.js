import React from 'react';
import Link from '@docusaurus/Link';

export default function TileLink({ title, description, className = '', url }) {
  return (
    <Link
      to={url}
      className={
        'no-underline col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 transform transition-transform	hover:scale-105 ' +
        className
      }
    >
      <div className="capitalize font-bold text-md text-white mb-2">
        {title}
      </div>
      <p className="text-gray-100 text-sm leading-5">{description}</p>
    </Link>
  );
}
