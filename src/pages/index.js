import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Quote from "../components/about/quote";
import Skills from "../components/skills/skills";
import Websites from "../components/websites/websites";
import GraphicDesign from "../components/graphics/graphics";

export default () => {
	return (
		<Layout>
			<Helmet>
				<title>Dan Mathisen - Full-stack web application developer</title>
			</Helmet>

			<Quote />
			<Skills />
			<Websites />
			<GraphicDesign />
		</Layout>
	)
}