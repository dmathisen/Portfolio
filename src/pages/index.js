import React from "react";
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-materialize";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout"
import Card from "../components/card"

export default () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					technologies {
						name
						type
						image
					}
				}
			}
		}
	`);
	
	const technologies = data.site.siteMetadata.technologies;
	const languages = technologies.filter(item => item.type === 'language');
	const libraries = technologies.filter(item => item.type === 'library');
	const others = technologies.filter(item => item.type === 'other');

	return (
		<Layout>
			<Helmet>
				<title>Dan Mathisen - Full-stack web application developer</title>
			</Helmet>

			<Container>
				<Row>
					<Col s={4}>
						<h5 className="center-align">Languages</h5>
						{ languages.map(item => <Card data={ item } />) }
					</Col>
					<Col s={4}>
						<h5 className="center-align">Libraries</h5>
						{ libraries.map(item => <Card data={ item } />) }
					</Col>
					<Col s={4}>
						<h5 className="center-align">Other skills</h5>
						{ others.map(item => <Card data={ item } />) }
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}