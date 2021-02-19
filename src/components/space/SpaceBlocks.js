import React from 'react';
import SpaceComponent from './SpaceComponent';
const SPACING = {
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
  56: '224px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
};

const SpaceBlocks = ({}) => {
  return (
    <table
      style={{
        borderRadius: 4,
        padding: 16,
        borderWidth: 0,
      }}
    >
      <thead>
        <tr style={{ borderWidth: 0 }}>
          <th style={{ borderWidth: 0 }}> Value </th>
          <th style={{ borderWidth: 0 }}> Pixels </th>
          <th style={{ borderWidth: 0 }}>Representation</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(SPACING).map((key, index) => (
          <SpaceComponent
            name={key}
            value={SPACING[key]}
            key={`space-component-${key}-${index}`}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SpaceBlocks;
