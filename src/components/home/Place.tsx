import React, { useState } from "react";
import { Accommodation } from "../../models/Interfaces";
import { Button, Card, Image, Modal, Table } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import "../../styles/Home.css";

interface PlaceProps {
  place: Accommodation;
}

const Place: React.FC<PlaceProps> = ({ place }) => {
  const [showModal, setShowModal] = useState(false);

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
          <Button onClick={handleShowModal} className="general-button">Más información</Button>
        </Card.Body>
      </Card>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal-distribution "
      >
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>{place.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body modal-content">
          <Image src={place.image_url} className="image-modal" />
          <br />
          <Table >
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
                <td><Button>Reservar</Button></td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseModal} className="button-style">Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Place;
