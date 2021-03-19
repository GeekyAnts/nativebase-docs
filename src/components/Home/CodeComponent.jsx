import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import palenight from 'prism-react-renderer/themes/palenight';

export function CodeComponent({ code }) {
  return (
    <Highlight {...defaultProps} code={code} theme={palenight} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            height: '100%',
            textAlign: 'left',
            padding: ' 0.5em',
            overflow: 'auto',
          }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i });
            return (
              <div
                {...lineProps}
                style={{ ...lineProps.style, display: 'table-row' }}
              >
                <div
                  style={{
                    display: 'table-cell',
                    textAlign: 'right',
                    paddingRight: '1em',
                    userSelect: 'none',
                    opacity: 0.5,
                  }}
                >
                  {i + 1}
                </div>
                <div style={{ display: 'table-cell' }}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
