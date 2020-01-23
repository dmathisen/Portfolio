import React from "react"
import "./header.css"

import { Link } from "gatsby";

const LinkList = props => (
	<li>
		<Link to={props.to}>{props.children}</Link>
	</li>
)

export default props => (
	<>
		<h1 className="header">This is a header.</h1>
		<ul>
			<LinkList to="/">Home</LinkList>
			<LinkList to="/#skills">Skills</LinkList>
			<LinkList to="/#web">Web Projects</LinkList>
			<LinkList to="/#graphic">Graphic Design</LinkList>
			<LinkList to="/#testimonials">Testimonials</LinkList>
			<LinkList to="/#contact">Contact</LinkList>
		</ul>
	</>
)