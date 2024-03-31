import { Card, Col, Container, Row } from "react-bootstrap";
import { Accommodation } from "../models/Interfaces";
import React from "react";
import LazyLoad from "react-lazyload";

const LandingPage: React.FC<{ places: Accommodation[] }> = ({ places }) => {
  return (
    <Container>
      <Row>
        {places.map((acc: Accommodation) => (
          <Col key={acc.id} sm={12} md={6} lg={4} xl={3}>
            <LazyLoad>
              <Card>
                <Card.Img variant="top" src={acc.image_url} alt="Image" />
                <Card.Body>
                  <Card.Title>{acc.name}</Card.Title>
                  <Card.Text>
                    <strong>Type:</strong> {acc.property_type} <br />
                    <strong>Amenities:</strong> {acc.amenities.join(", ")}
                  </Card.Text>
                </Card.Body>
              </Card>
            </LazyLoad>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LandingPage;
