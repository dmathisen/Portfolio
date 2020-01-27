import React from "react";
import { Container, Row, Col } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby";

import TestimonialItem from "./testimonialItem"
import "./testimonials.css"

export default () => {
    const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					testimonials {
						personName
						personTitle
						personImage
                        content
                    }
				}
			}
		}
	`);

	const testimonials = data.site.siteMetadata.testimonials;

	return (
		<Container id="testimonials">
            <Row>
                <Col s={12} style={{marginTop: 50 + 'px'}}>
                    <h4>Testimonials</h4>
					<div class="testimonials-wrapper">
						{ testimonials.map(item => <TestimonialItem data={ item } key={ item.personImage } />) }
					</div>
                </Col>
            </Row>
        </Container>
	)
}