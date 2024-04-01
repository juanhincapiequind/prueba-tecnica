import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PlacesGrid from "../components/home/PlacesGrid";
import '../styles/Home.css'
import ModalProperties from "../components/modals/ModalProperties";
import { places } from "../models/PlacesModel";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProperties, setAllProperties] = useState(false);

  const handleOpenProperties = () => {
    setAllProperties(true)
  }


  const handleCloseProperties = () => {
    setAllProperties(false)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <React.Fragment>
      <h1 className="page-title">Bienvenidos</h1><br/>
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar por ubicación o nombre de propiedad..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col md={6}>
          <Button className="general-button" onClick={handleOpenProperties}>Ver todas las propiedades</Button>
        </Col>
      </Row>      
      <PlacesGrid searchQuery={searchQuery} />
      {allProperties && <ModalProperties show={allProperties} onHide={handleCloseProperties} places={places} />}
    </React.Fragment>
  );
}

export default Home;
