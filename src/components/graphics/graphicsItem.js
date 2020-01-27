import React from "react";
import { Col, Card } from "react-materialize"

export default ({data}) => {
    const imageUrl = `/images/graphics/${data.image}`;

    return (
		<Col s={4}>
			<Card className="graphics-item">
				<div className="card-image">
					<a href={imageUrl}><img src={imageUrl} alt={data.name} /></a>
				</div>
				<h5>{data.name}</h5>
				<p>Here is the standard card with an image thumbnail.</p>
			</Card>
		</Col>
    )
}