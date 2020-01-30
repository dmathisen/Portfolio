import React from 'react'
import { Button, Icon } from 'react-materialize';

export default () => {
	return (
		<Button
			floating
			small
			className="btn-back-to-top blue-grey"
			node="a"
			waves="light"
			icon={<Icon>vertical_align_top</Icon>}
			href="/#top"
			title="Go to top"
		/>
	)
}