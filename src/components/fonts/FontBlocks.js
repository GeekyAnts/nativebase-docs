import React from 'react';
import FontSizeComponent from './FontSizeComponent';
const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 48,
  '6xl': 64,
};

const FontBlocks = ({}) => {
  return (
    <dl
      style={{
        backgroundColor: '#292d3e',
        borderRadius: 4,
        padding: 16,
        color: 'white',
      }}
    >
      {Object.keys(FONT_SIZES).map((key, index) => (
        <FontSizeComponent
          name={key}
          value={FONT_SIZES[key]}
          key={`space-component-${key}-${index}`}
        />
      ))}
    </dl>
  );
};

export default FontBlocks;
