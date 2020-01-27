import React from "react";
import { Card, CardTitle } from "react-materialize"

export default ({website, technologies}) => {
    const imageUrl = `/images/websites/${website.image}`;

    return (
        <>
            <Card
                className="website-item"
                header={<CardTitle image={imageUrl}></CardTitle>}
                actions={[ <a href={website.website} target="_blank" key="1">Visit Website</a> ]}
            >
                <h5 className="website-item-title">{website.name}</h5>
                <p>Here is the standard card with an image thumbnail.</p>

                <div className="website-item-tech-list">
                    <p><strong>Built using:</strong></p>
                    {
                        website.technologies.map(technology => {
                            const techDetails = technologies.find(tech => tech.name === technology);
                            const techImageUrl = `/images/technologies/${techDetails.image}`;
                            return <img src={techImageUrl} alt={techDetails.name} key={techDetails.name} />
                        })
                    }
                </div>
            </Card>
        </>
    )
}