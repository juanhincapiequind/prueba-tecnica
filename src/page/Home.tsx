import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PlacesGrid from "../components/home/PlacesGrid";
import '../styles/Home.css'
import ModalProperties from "../components/modals/ModalProperties";
import { places } from "../models/PlacesModel";
import { Reservation } from "../models/Interfaces";
import ReservationHistoryModal from "../components/modals/ModalHistoryReservation";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allProperties, setAllProperties] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [reservations, setReservations] = useState<Reservation[]>([])

  const handleOpenProperties = () => {
    setAllProperties(true)
  }

  const handleShowReservationHistory = () => {
    setShowHistory(true);
  };
  
  const handleCloseReservationHistory = () => {
    setShowHistory(false);
  };

  const handleCloseProperties = () => {
    setAllProperties(false)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleReserve = (newReservation: Reservation) => {
    setReservations([...reservations, newReservation])
  }

  return (
    <React.Fragment>
      <h1 className="page-title">Bienvenidos a Alquilam Esta</h1><br/>
      <Row>
        <Col md={6}>
          <Form.Control
            type="text"
            placeholder="Buscar por ubicación o nombre de propiedad..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Col>
        <Col md={3}>
          <Button className="general-button" onClick={handleOpenProperties}>Ver todas las propiedades</Button>
        </Col>
        <Col md={3}>
          <Button className="general-button" onClick={handleShowReservationHistory}>Mis reservas</Button>
        </Col>
      </Row>      
      <PlacesGrid searchQuery={searchQuery} onReserve={handleReserve} />
      {allProperties && <ModalProperties show={allProperties} onHide={handleCloseProperties} places={places} />}
      <ReservationHistoryModal show={showHistory} onClose={handleCloseReservationHistory} reservations={reservations}/>
    </React.Fragment>
  );
}

export default Home;
