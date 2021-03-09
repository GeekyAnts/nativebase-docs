import * as React from 'react';

function Moon({ fill, ...props }) {
  return (
    <svg width={22} height={22} viewBox="0 0 20 20" {...props}>
      <path
        d="M10.01 20.021a9.747 9.747 0 008.942-5.641 7.643 7.643 0 01-3.223.636 7.874 7.874 0 01-7.864-7.865A8.151 8.151 0 0112.106.12 14.946 14.946 0 0010.01 0a10.01 10.01 0 000 20.019z"
        fill={fill ?? '#666'}
      />
    </svg>
  );
}

export default Moon;
