import React from "react"
import Header from "./header"
import { useStaticQuery, graphql } from "gatsby"

export default ({ children }) => {
	const data = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						subTitle
					}
				}
			}
		`
	);

	return (
		<>
			<Header data={data} />
			{children}
		</>
	)
}