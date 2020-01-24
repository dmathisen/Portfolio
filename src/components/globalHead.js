import React from "react"
import { Helmet } from "react-helmet"
import M from "materialize-css/dist/js/materialize.min.js";

export default () => {
	return (
		<Helmet>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
			<script>
				{
					document.addEventListener('DOMContentLoaded', function() {
						M.Sidenav.init(document.querySelector('.sidenav'), {});
					})
				}
			</script>
		</Helmet>
	)
}