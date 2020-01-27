import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Quote from "../components/quote";
import Skills from "../components/skills";

export default () => {
	return (
		<Layout>
			<Helmet>
				<title>Dan Mathisen - Full-stack web application developer</title>
			</Helmet>

			<Quote />
			<Skills />
		</Layout>
	)
}