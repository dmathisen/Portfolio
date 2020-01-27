import React from 'react';
import { Col } from 'react-materialize';

export default ({data}) => {
	const imageUrl = `/images/testimonials/${data.personImage}`;

	return (
		<Col className="testimonial-item center" s={12} m={4}>
			<img src={imageUrl} alt={data.personName} />
			
			<h5>{data.personName}</h5>
			
			<p>{data.personTitle}</p>

			<blockquote className="testimonial">
				{data.content}
			</blockquote>
		</Col>
	)
}