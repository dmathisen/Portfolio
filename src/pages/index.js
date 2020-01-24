import React from "react";
import { Helmet } from "react-helmet"
import { Link } from "gatsby";

import Layout from "../components/layout"

export default props => {
	return (
		<Layout>
			<Helmet>
				<title>Dan Mathisen - Full-stack web application developer</title>
			</Helmet>
			
			<h1>Hello Gatsby!</h1>
			<Link to="/about">About</Link>
		</Layout>
	)
}