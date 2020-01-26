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
					<Col s={12} l={6}>
						<h5>Languages</h5>
						<div className="card-wrapper">
							{ languages.map(item => <Card data={ item } />) }
						</div>
					</Col>
					<Col s={12} l={6}>
						<h5>Libraries</h5>
						<div className="card-wrapper">
							{ libraries.map(item => <Card data={ item } />) }
						</div>
					</Col>
					<Col s={12}>
						<h5>Other skills</h5>
						<div className="card-wrapper">
							{ others.map(item => <Card data={ item } />) }
						</div>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}