import React, { useState } from "react";
import { Container, Row, Col } from "react-materialize";
import { useStaticQuery, graphql } from "gatsby";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import GraphicsItem from "./graphicsItem";
import "./graphics.css";

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          graphics {
            name
            client
            desc
            image
          }
        }
      }
    }
  `);

  const graphics = data.site.siteMetadata.graphics;
  const images = graphics.map(graphic => `/images/graphics/${graphic.image}`);

  return (
    <Container id="graphics">
      <Row>
        <Col s={12} style={{ marginTop: 50 + "px" }}>
          <h4>Graphic Design</h4>
          <div className="graphics-wrapper">
            {
              graphics.map((item, idx) =>
                <GraphicsItem data={item} key={idx} index={idx} setIsOpen={setIsOpen} setPhotoIndex={setPhotoIndex} />
              )
            }
          </div>

          {/* lightbox */}
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};
