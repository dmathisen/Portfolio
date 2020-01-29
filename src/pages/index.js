import React from "react";
import { Helmet } from "react-helmet";
import { Button, Icon } from 'react-materialize';

import Layout from "../components/layout";
import Quote from "../components/about/quote";
import Skills from "../components/skills/skills";
import Websites from "../components/websites/websites";
import GraphicDesign from "../components/graphics/graphics";
import Testimonials from "../components/testimonials/testimonials"
import Contact from "../components/contact/contact"

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
			<Testimonials />
			<Contact />

			<Button
				floating
				className="blue-grey"
				node="a"
				waves="light"
				icon={<Icon>vertical_align_top</Icon>}
				style={{ position: 'fixed', bottom: 30, right: 30 }}
				href="/#top"
				title="Go to top"
			/>
		</Layout>
	)
}