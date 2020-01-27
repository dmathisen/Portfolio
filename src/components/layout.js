import React from "react"

import GlobalHead from "./globalHead";
import Header from "./header";
import Footer from "./footer";

import "./layout.css"

export default ({ children }) => {
	return (
		<>
			<GlobalHead />

			<Header />
			{children}
			<Footer />
		</>
	)
}