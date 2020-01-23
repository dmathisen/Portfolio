import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"

export default props => (
	<Layout>
		<h1>About Gatsby</h1>
		<p>Such wow. Very React.</p>
		<Link to="/">Home</Link>
	</Layout>
)