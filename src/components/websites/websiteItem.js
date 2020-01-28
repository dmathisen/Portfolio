import React from "react";
import { Card, CardTitle, Button } from "react-materialize"

export default ({website, technologies}) => {
    const imageUrl = `/images/websites/${website.image}`;

    return (
        <Card
            className="website-item"
            header={<CardTitle image={imageUrl}></CardTitle>}
            actions={[
                <Button small href={website.website} node="a" waves="light" target="_blank">Visit Website</Button>
            ]}
        >
            <h5>{website.name}</h5>
            <p>{website.desc}</p>

            <div className="website-item-tech-list">
                {
                    website.technologies.map(technology => {
                        const techDetails = technologies.find(tech => tech.name === technology);
                        const techImageUrl = `/images/technologies/${techDetails.image}`;
                        return <img src={techImageUrl} alt={techDetails.name} key={techDetails.name} />
                    })
                }
            </div>
        </Card>
    )
}