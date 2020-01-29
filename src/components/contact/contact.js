import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from 'react-materialize';

import './contact.css'

export default() => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					contact {
						name
						url
                        image
                    }
				}
			}
		}
	`);

	const contacts = data.site.siteMetadata.contact;

	return (
		<Container id="contact">
			<Row>
				<Col s={12}>
					<h5>Find Me</h5>

					<div className="contact-wrapper">

						{/* icons from https://www.iconfinder.com/iconsets/logos-and-brands */}
						{
							contacts.map(contact => {
								const imageUrl = `/images/social/${contact.image}`;
								return (
									<a href={contact.url} className="contact-item" target="_blank" rel="noopener noreferrer">
										<img src={imageUrl} alt={contact.name} />
										<p>{contact.name}</p>
									</a>
								)
							})
						}
					</div>
				</Col>
			</Row>
		</Container>
	)
}