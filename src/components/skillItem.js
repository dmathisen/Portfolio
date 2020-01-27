import React from "react";

export default ({data}) => {
    const imageUrl = `/images/technologies/${data.image}`;

    return (
        <div className="skill-item" key={data.name}>
            <img src={imageUrl} alt={data.name} />
            <p className="skill-item-title">{data.name}</p>
        </div>
    )
}