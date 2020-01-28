import React from "react";

export default ({data}) => {
    const imageUrl = `/images/technologies/${data.image}`;
    const borderBottom = `2px solid ${data.color}`;

    return (
        <div className="skill-item">
            <img src={imageUrl} alt={data.name} style={{borderBottom: borderBottom}} />
            <p className="skill-item-title">{data.name}</p>
        </div>
    )
}