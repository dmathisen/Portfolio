import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col } from "react-materialize";

import ContactForm from "./contactForm";
import "./contact.css";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            name
            url
            slug
          }
        }
      }
    }
  `);

  const contacts = data.site.siteMetadata.contact;

  return (
    <Container id="contact">
      <Row>
        <Col s={12} className="center">
          <h5>Find Me</h5>
          
          {
            contacts.map(contact => {
              const spriteClass = `sprite-social sprite-social-${contact.slug}`;
              
              return (
                <a href={contact.url} key={contact.name} className="contact-item" target="_blank" rel="noopener noreferrer">
                  <i className={ spriteClass }></i>
                  <p>{contact.name}</p>
                </a>
              );
            })
          }

          <h5>Contact Me</h5>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};
