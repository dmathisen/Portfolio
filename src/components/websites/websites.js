import React from "react";
import { Container, Row, Col } from "react-materialize";
import { useStaticQuery, graphql } from "gatsby";

import WebsiteItem from "./websiteItem";
import "./websites.css";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          websites {
            name
            desc
            technologies
            website
            image
          }
          technologies {
            name
          }
        }
      }
    }
  `);

  const websites = data.site.siteMetadata.websites;
  const technologies = data.site.siteMetadata.technologies;

  return (
    <Container id="websites">
      <Row>
        <Col s={12} style={{ marginTop: 50 + "px" }}>
          <h4>Websites</h4>
          <div className="website-wrapper">
            {
              websites.map(item =>
                <WebsiteItem website={item} technologies={technologies} key={item.name} />
              )
            }
          </div>
        </Col>
      </Row>
    </Container>
  );
};
