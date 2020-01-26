import React from "react";
import { Col } from "react-materialize";

import "./card.css"

export default ({data}) => {
    const imageUrl = `/images/technologies/${data.image}`;

    return (
        <Col className="card" s={4}>
            <img src={imageUrl} />
            <p className="card-title">{data.name}</p>
        </Col>
    )
}