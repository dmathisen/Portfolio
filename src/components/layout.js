import React from "react"
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
			<Header data={data} />
			{children}
		</>
	)
}