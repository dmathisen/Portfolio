import React from "react";

export default ({ data }) => {
  const borderBottom = `2px solid ${data.color}`;
  const spriteClass = `sprite-tech sprite-tech-${data.slug}`;

  return (
    <div className="skill-item">
      <i className={ spriteClass } style={{ borderBottom: borderBottom }}></i>
      <p className="skill-item-title">{data.name}</p>
    </div>
  );
};
