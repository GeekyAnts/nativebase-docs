import React from 'react';

const SpaceComponent = ({ name, value }) => {
  return (
    <tr
      style={{
        backgroundColor: 'inherit',
      }}
    >
      <td style={{ borderWidth: 0, borderBottomWidth: 1 }}>{name}</td>
      <td style={{ borderWidth: 0, borderBottomWidth: 1 }}>{value}</td>
      <td style={{ borderWidth: 0, borderBottomWidth: 1 }}>
        <div style={{ height: 16, width: value, backgroundColor: '#4B3AB2' }} />
      </td>
    </tr>
  );
};
export default SpaceComponent;
