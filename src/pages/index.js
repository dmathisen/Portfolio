import React from "react";
import { Helmet } from "react-helmet"
import { Container, Row, Col } from "react-materialize";

import Layout from "../components/layout"

export default props => {
	return (
		<Layout>
			<Helmet>
				<title>Dan Mathisen - Full-stack web application developer</title>
			</Helmet>

			<Container>
				<Row>
					<Col s={4}>
						<h5 className="center-align">Languages</h5>
					</Col>
					<Col s={4}>
						<h5 className="center-align">Libraries</h5>
					</Col>
					<Col s={4}>
						<h5 className="center-align">Skills</h5>
					</Col>
				</Row>
			</Container>
		</Layout>
	)
}