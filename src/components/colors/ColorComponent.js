import React from "react";

const ColorComponent = ({ name, variants }) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div>
      <h3 style={{ marginTop: "3rem" }}>{name}</h3>
      <div
        style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
          marginTop: "1rem",
        }}
      >
        {Object.keys(variants).map((variant, key) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "row" }}
              key={`color-component-${variant}-${key}`}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  backgroundColor: variants[variant],
                  borderRadius: "0.375rem",
                  marginRight: "0.5rem",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: "bold" }}>
                  {`${name !== "Singletons" ? name : ""} ${
                    variant.charAt(0).toUpperCase() + variant.slice(1)
                  }`}
                </div>
                <div>{variants[variant]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ColorComponent;
