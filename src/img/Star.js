import * as React from 'react';

function Star({ fill, ...props }) {
  return (
    <svg width={21.042} height={20} viewBox="0 0 21.042 20" {...props}>
      <path
        d="M64.521 80.077L71.022 84 69.3 76.6l5.739-4.975-7.566-.65L64.521 64l-2.955 6.976-7.566.649 5.739 4.975-1.72 7.4z"
        transform="translate(-54 -64)"
        fill={fill ?? '#fff'}
      />
    </svg>
  );
}

export default Star;
