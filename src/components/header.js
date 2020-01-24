import React from "react"
import { Link } from "gatsby";
import "./header.css"

export default ({data}) => {
	return (
		<header>
			<h1>{data.site.siteMetadata.title}</h1>
			<h2>{data.site.siteMetadata.subTitle}</h2>

			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/#skills">Skills</Link></li>
					<li><Link to="/#web">Web Projects</Link></li>
					<li><Link to="/#graphic">Graphic Design</Link></li>
					<li><Link to="/#testimonials">Testimonials</Link></li>
					<li><Link to="/#resume">Resume</Link></li>
					<li><Link to="/#contact">Contact</Link></li>
				</ul>
			</nav>
		</header>
	)
}