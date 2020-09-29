import React from "react";
import { Card } from "react-materialize";

export default ({ data, index, setIsOpen, setPhotoIndex }) => {
  const imageUrl = `/images/graphics/${data.image}`;

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(true);
    setPhotoIndex(index);
  };

  return (
    <Card className="graphics-item center">
      <div className="card-image">
        <a href="/" onClick={handleClick}>
          <img src={imageUrl} alt={data.name} loading="lazy" />
        </a>
      </div>
      <h5>{data.name}</h5>
      <p>
        <em>{data.client}</em>
      </p>
      <p>{data.desc}</p>
    </Card>
  );
};
