import React from "react"

export default props => {
	const currentYear = (new Date()).getFullYear();

	return (
		<footer>
			Copyright &copy; { currentYear } Dan Mathisen
		</footer>
	)
}