import React from "react";
import { Container, Row, Col } from "react-materialize"
import { useStaticQuery, graphql } from "gatsby";

import GraphicsItem from "./graphicsItem"
import "./graphics.css"

export default () => {
    const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					graphics {
						name
                        desc
                        image
                    }
				}
			}
		}
	`);
	
	const graphics = data.site.siteMetadata.graphics;
    
    return (
        <Container id="graphics">
            <Row>
                <Col s={12} style={{marginTop: 50 + 'px'}}>
                    <h4>Graphic Design</h4>
					{ graphics.map(item => <GraphicsItem data={ item } key={ item.name } />) }
                </Col>
            </Row>
        </Container>
    )
}