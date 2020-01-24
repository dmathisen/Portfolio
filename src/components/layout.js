import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header"

export default ({ children }) => {
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
	return (
		<>
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
			</Helmet>

			<Header data={data} />
			{children}
		</>
	)
}