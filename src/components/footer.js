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
					<Col s={7}>
						<p>Copyright &copy; { currentYear } <span>{ data.site.siteMetadata.title }</span></p>
					</Col>
					<Col s={5} className="right-align">
						<p><a href="/dan-mathisen-resume.pdf" target="_blank">Download Resume (PDF)</a></p>
					</Col>
				</Row>
			</Container>
		</footer>
	)
}