import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Navbar, NavItem } from "react-materialize";

import HeaderWaves from "./headerWaves"
import "./header.css"

export default () => {
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
		<header>
			<Navbar
				alignLinks="right"
				brand={
					<div>
						<a href="/">{ data.site.siteMetadata.title }</a><br/>
						<span>{ data.site.siteMetadata.subTitle }</span>
					</div>
				}
			>
				<NavItem href="/#skills">Skills</NavItem>
				<NavItem href="/#websites">Web Projects</NavItem>
				<NavItem href="/#graphics">Graphic Design</NavItem>
				<NavItem href="/#testimonials">Testimonials</NavItem>
				<NavItem href="/#resume">Resume</NavItem>
				<NavItem href="/#contact">Contact</NavItem>
			</Navbar>

			<HeaderWaves />
		</header>
	)
}