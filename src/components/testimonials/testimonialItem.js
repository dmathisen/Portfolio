import React from 'react';
import { Col } from 'react-materialize';

export default ({data}) => {
	const imageUrl = `/images/testimonials/${data.personImage}`;

	return (
		<Col className="testimonial-item center" l={4}>
			<img src={imageUrl} alt={data.personName} />
			
			<h5>{data.personName}</h5>
			
			<p>{data.personTitle}</p>
			<p><strong>{data.personCompany}</strong></p>

			<blockquote className="testimonial">
				{data.content}
			</blockquote>
		</Col>
	)
}