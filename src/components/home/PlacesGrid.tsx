import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Accommodation } from "../../models/Interfaces";
import { places } from "../../models/PlacesModel";
import Place from "./Place";

interface PlaceGridProps {
  searchQuery: string;
}

const PlacesGrid: React.FC<PlaceGridProps> = ({ searchQuery }) => {
  let placesToShow: Accommodation[] = [];  

  if (!searchQuery) {
    placesToShow = getRandomPlaces(places, 4);
  } else {
    placesToShow = places.filter(
      (place) =>
        place.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        place.location
          .toLocaleLowerCase()
          .includes(searchQuery.toLocaleLowerCase())
    );
  }

  return (
    <Container>
      <h2>Explora lugares</h2>
      <Row style={{ marginTop: "20px" }}>
        {placesToShow.map((place) => (
          <Col key={place.id} sm={6} md={3} lg={3}>
            <Place key={place.id} place={place} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const getRandomPlaces = (
  array: Accommodation[],
  numItems: number
): Accommodation[] => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numItems);
};

export default PlacesGrid;
