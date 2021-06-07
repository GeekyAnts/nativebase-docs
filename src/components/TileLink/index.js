import React from 'react';

export default function TileLink({ title, description, className = '' }) {
  return (
    <div
      className={
        'col col--5 rounded-md pt-6 px-4 shadow-2xl mx-2 mb-2 transform motion-safe:hover:scale-110 ' +
        className
      }
    >
      <div className="uppercase font-bold text-sm text-white mb-2">{title}</div>
      <p className="text-gray-100 text-sm leading-5">{description}</p>
    </div>
  );
}
