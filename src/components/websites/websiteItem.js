import React from "react";
import { Card, CardTitle, Chip, Button } from "react-materialize"

export default ({website, technologies}) => {
    const imageUrl = `/images/websites/${website.image}`;

    return (
        <Card
            className="website-item"
            header={<CardTitle image={imageUrl}></CardTitle>}
            actions={[
                <Button small href={website.website} node="a" waves="light" target="_blank" key={website.name}>Visit Website</Button>
            ]}
        >
            <h5>{website.name}</h5>
            <p>{website.desc}</p>

            {
                website.technologies.map(technology => {
                    const techDetails = technologies.find(tech => tech.name === technology);
                    return <Chip key={techDetails.name}>{techDetails.name}</Chip>
                })
            }
        </Card>
    )
}