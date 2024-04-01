import React, { useState } from "react";
import { Button, Card, Image, Modal, Table } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import "../../styles/Home.css";
import ReservationForm from "./ReservationForm";
import { Accommodation, Reservation } from "../../models/Interfaces";

interface PlaceProps {
  place: Accommodation;
  onReserve: (newReservation : Reservation) => void;
}


const Place: React.FC<PlaceProps> = ({ place, onReserve }) => {
  const [showModal, setShowModal] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Accommodation | null>(null);
  const [reservation, setReservation] = useState<Reservation[]>([]) 

  const handleReserveClick = (place: Accommodation) => {
    setSelectedPlace(place);
    setShowReservationModal(true);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      <Card>
        <LazyLoad height={200} offset={100}>
          <Card.Img variant="top" src={place.image_url} />
        </LazyLoad>
        <Card.Body>
          <Card.Title>{place.name}</Card.Title>
          <Card.Text>{place.location}</Card.Text>
          <Button onClick={handleShowModal} className="general-button">
            Más información
          </Button>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-distribution"
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{place.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body modal-content">
          <Image src={place.image_url} className="image-modal" />
          <br />
          <Table>
            <thead className="table-titles">
              <tr>
                <th>Ubicación</th>
                <th>Comodidades</th>
                <th>Nombre del lugar</th>
                <th>Tipo propiedad</th>
                <th>Precio por noche</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{place.location}</td>
                <td>
                  <ul>
                    {place.amenities.map((amenities, index) => (
                      <li key={index}>{amenities}</li>
                    ))}
                  </ul>
                </td>
                <td>{place.name}</td>
                <td>{place.property_type}</td>
                <td>{place.price_per_night + " $USD"}</td>
                <td>
                  <Button onClick={() => handleReserveClick(place)}>
                    Reservar
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} className="button-style">
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {showReservationModal && (
        <ReservationForm
          onClose={() => setShowReservationModal(false)}          
          onReserve={(startDate, endDate) => {
            const newReservation: Reservation = {
              startDate,
              endDate,
              reservedPlace: selectedPlace?.name || ""
            };
            onReserve(newReservation)            
            setShowReservationModal(false);
            alert(
              `Reservación para ${selectedPlace?.name} elaborada correctamente para la fecha ${startDate} hasta ${endDate}`
            );
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Place;
