import React from "react";
import { Card } from "react-materialize"

export default ({data}) => {
    const imageUrl = `/images/graphics/${data.image}`;

    return (
		<Card className="graphics-item">
			<div className="card-image">
				<a href={imageUrl}><img src={imageUrl} alt={data.name} /></a>
			</div>
			<h5>{data.name}</h5>
			<p>{data.desc}</p>
		</Card>
    )
}