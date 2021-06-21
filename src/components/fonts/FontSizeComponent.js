import React from 'react';

const FontSizeComponent = ({ name, value }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <dt
        style={{
          lineHeight: 1,
          width: '48px',
          flexShrink: 0,
        }}
      >
        {name}
      </dt>
      <dd
        style={{
          lineHeight: value !== 'xs' ? 1 : undefined,
          fontSize: value,
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          maxWidth: '600px',
          marginLeft: '20px',
        }}
      >
        The quick brown fox jumped over the lazy dog.
      </dd>
    </div>
  );
};
export default FontSizeComponent;
