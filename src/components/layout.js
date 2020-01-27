import React from "react"
import { Helmet } from "react-helmet";

import Footer from "./footer";
import Navbar from "./navbar";
import Waves from "./waves";

import "./layout.css"

export default ({ children }) => {
	// handle case when these is no window/document defined (when running build)
	const clientIsBrowser = typeof window === "object" ? true : false;

	return (
		<>
			<Helmet>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
				<script>
					{
						// initialize Materialize navbar
						clientIsBrowser && document.addEventListener('DOMContentLoaded', function() {
							const sidenav = document.querySelector('.sidenav');
							sidenav.sidenav();
						})
					}
				</script>
			</Helmet>

			<header>
				<Navbar />
				<Waves />
			</header>

			{children}

			<Footer />
		</>
	)
}