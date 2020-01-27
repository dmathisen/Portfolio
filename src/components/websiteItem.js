import React from "react";
import { Card, CardTitle } from "react-materialize"

export default ({website, technologies}) => {
    const imageUrl = `/images/websites/${website.image}`;

    return (
        <>
            <Card
                className="website-item"
                header={<CardTitle image={imageUrl}></CardTitle>}
                actions={[ <a key="1" href="#">Visit Website</a> ]}
            >
                <h5 className="website-item-title">{website.name}</h5>
                <p>Here is the standard card with an image thumbnail.</p>

                <div class="website-item-tech-list">
                    <p><strong>Built using:</strong></p>
                    {
                        website.technologies.map(technology => {
                            const techDetails = technologies.find(tech => tech.name === technology);
                            const techImageUrl = `/images/technologies/${techDetails.image}`;
                            return <img src={techImageUrl} alt={techDetails.name} />
                        })
                    }
                </div>
            </Card>
        </>
    )
}