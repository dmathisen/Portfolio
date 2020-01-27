import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-materialize";

import './footer.css';

export default () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					subTitle
				}
			}
		}
	`);

	const currentYear = (new Date()).getFullYear();

	return (
		<footer>
			<Container>
				<Row>
					<Col s={6}>
						<p>Copyright &copy; { currentYear } { data.site.siteMetadata.title }</p>
					</Col>
					<Col s={6} className="right-align">
						<p><a href="/dan-mathisen-resume.pdf" target="_blank">Download Resume (PDF)</a></p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}