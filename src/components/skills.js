import React from 'react';
import { Container, Row, Col } from "react-materialize";
import { useStaticQuery, graphql } from "gatsby";

import SkillItem from "./skillItem"
import "./skills.css"

export default () => {
    const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					technologies {
						name
						type
						image
					}
				}
			}
		}
	`);
	
	const technologies = data.site.siteMetadata.technologies;
	const languages = technologies.filter(item => item.type === 'language');
	const libraries = technologies.filter(item => item.type === 'library');
    const others = technologies.filter(item => item.type === 'other');
    
    return (
        <Container>
            <Row>
                <Col s={12} l={6}>
                    <h5>Languages</h5>
                    <div className="skill-item-wrapper">
                        { languages.map(item => <SkillItem data={ item } />) }
                    </div>

                    <h5>Design</h5>
                    <div className="skill-item-wrapper">
                        { others.map(item => <SkillItem data={ item } />) }
                    </div>
                </Col>
                <Col s={12} l={6}>
                    <h5>Libraries / Other</h5>
                    <div className="skill-item-wrapper">
                        { libraries.map(item => <SkillItem data={ item } />) }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}