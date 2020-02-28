import React from "react";
import { Helmet } from "react-helmet";
import { Container, Row, Col, Button } from "react-materialize";

import Layout from "../components/layout";

export default () => {
	return (
	  <Layout>
		<Helmet>
		  <title>404 - Page not found</title>
		</Helmet>

		<Container>
			<Row>
				<Col s={12} className="center-align">
					<span style={{fontSize: '8rem'}} role="img" aria-label="sad face">🙁</span>
					<h1>404 - Page Not Found</h1>
					<p>Sorry, but the page you were trying to view does not exist.</p>
					<br />
					<Button href="/" node="a" waves="light" large>Go to the home page</Button>
				</Col>
			</Row>
		</Container>
	  </Layout>
	);
  };