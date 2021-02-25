import * as React from 'react';

function RightArrow({ fill, ...props }) {
  return (
    <svg width={12} height={10.828} viewBox="0 0 12 10.828" {...props}>
      <path
        d="M11.707 4.707L7 0 5.586 1.414l3 3H0v2h8.586l-3 3L7 10.828l4.707-4.707a1 1 0 000-1.414z"
        fill={fill ?? '#666'}
      />
    </svg>
  );
}

export default RightArrow;
