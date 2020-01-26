import React from "react";
import { Col } from "react-materialize";

import "./card.css"

export default ({data}) => {
    const imageUrl = `/images/technologies/${data.image}`;

    return (
        <div className="card">
            <img src={imageUrl} />
            <p className="card-title">{data.name}</p>
        </div>
    )
}