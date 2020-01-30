import React from "react";
import { Card, CardTitle, Chip, Button } from "react-materialize";
import M from 'materialize-css';

export default ({website, technologies}) => {
	const imageUrl = `/images/websites/${website.image}`;

	const messages = [
		'Error: Maximum call stack exceeded.',
		'To infinity and beyond!',
		'This is very meta.',
		'We seem to be going in circles.',
		'We\'ll just stay where we are.',
		'We\'re stuck here...',
		'Error 429: Too many redirects.',
		'But... you\'re already here!',
		'This is awkward...'
	]

	const navigate = e => {
		if (e.target.href === "https://danmathisen.com/") {
			e.preventDefault();

			const randomMessage = messages[Math.floor(Math.random() * messages.length)];
			M.toast({ html: randomMessage, classes: "fail" });
		}
	}

    return (
        <Card
            className="website-item"
            header={<CardTitle image={imageUrl}></CardTitle>}
            actions={[
                <Button small href={website.website} onClick={navigate} node="a" waves="light" target="_blank" key={website.name}>Visit Website</Button>
            ]}
        >
            <h5>{website.name}</h5>
            {/* <p>{website.desc}</p> */}

			<div className="tech-chips">
			{
                website.technologies.map(technology => {
					const techDetails = technologies.find(tech => tech.name === technology);
					
                    return <Chip key={techDetails.name}>{techDetails.name}</Chip>
                })
            }
			</div>
        </Card>
    )
}