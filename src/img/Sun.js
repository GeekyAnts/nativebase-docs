import * as React from 'react';

function Sun({ fill, ...props }) {
  return (
    <svg width={22} height={22} viewBox="0 0 20 20" {...props}>
      <path
        d="M43.237 32h-1.956v2.964h1.956zm5.914 2.024l-1.76 1.776 1.37 1.385 1.759-1.779zm-13.779 0L34 35.409l1.759 1.779L37.13 35.8zm6.889 2.422a5.929 5.929 0 105.863 5.929 5.914 5.914 0 00-5.863-5.929zm10.261 4.942H49.59v1.978h2.932zm-17.59 0H32v1.978h2.932zm13.829 6.174l-1.37 1.385 1.759 1.779 1.37-1.385zm-13 0L34 49.341l1.37 1.385 1.759-1.779zm7.476 2.223h-1.956v2.965h1.956z"
        transform="translate(-32 -32)"
        fill={fill ?? '#666'}
      />
    </svg>
  );
}

export default Sun;
