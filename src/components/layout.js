import React from "react"
import { useStaticQuery, graphql } from "gatsby";

import GlobalHead from "./globalHead";
import Header from "./header";
import Footer from "./footer";

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
			<GlobalHead />

			<Header data={data} />
			{children}
			<Footer />
		</>
	)
}