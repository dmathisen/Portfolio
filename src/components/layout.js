import React from "react"
import { Helmet } from "react-helmet";

import Footer from "./footer";
import Navbar from "./navbar";
import Waves from "./waves";

import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import "./layout.css"

export default ({ children }) => {
	return (
		<>
			<Helmet>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			</Helmet>

			<header id="top">
				<Navbar />
				<Waves />
			</header>

			{children}

			<Footer />
		</>
	)
}