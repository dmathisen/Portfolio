import React from "react";
import { Navbar, NavItem } from "react-materialize";
import HeaderWaves from "./headerWaves"

import "./header.css"

export default props => {
	return (
		<header>
			<Navbar alignLinks="right" brand={<a className="brand-logo" href="#">Dan Mathisen</a>}>
				<NavItem href="/#skills">Skills</NavItem>
				<NavItem href="/#web">Web Projects</NavItem>
				<NavItem href="/#graphic">Graphic Design</NavItem>
				<NavItem href="/#testimonials">Testimonials</NavItem>
				<NavItem href="/#resume">Resume</NavItem>
				<NavItem href="/#contact">Contact</NavItem>
			</Navbar>
			
			<HeaderWaves />
		</header>
	)
}