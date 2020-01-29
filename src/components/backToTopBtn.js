import React from 'react'
import { Button, Icon } from 'react-materialize';

export default () => {
	return (
		<Button
			floating
			className="blue-grey"
			node="a"
			waves="light"
			icon={<Icon>vertical_align_top</Icon>}
			style={{ position: 'fixed', bottom: 30, right: 30 }}
			href="/#top"
			title="Go to top"
		/>
	)
}