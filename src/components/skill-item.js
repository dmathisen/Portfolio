import React from "react";
import "./skill-item.css"

export default ({data}) => {
    const imageUrl = `/images/technologies/${data.image}`;

    return (
        <div className="skill-item">
            <img src={imageUrl} alt={data.name} />
            <p className="skill-item-title">{data.name}</p>
        </div>
    )
}