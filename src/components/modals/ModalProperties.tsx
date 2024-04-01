import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Accommodation } from "../../models/Interfaces";
import ReservationForm from "../home/ReservationForm";


interface AllPropertiesProps {
  places: Accommodation[];
  show: boolean;
  onHide: () => void
}

const ModalProperties: React.FC<AllPropertiesProps> = ({ places, show, onHide }) => {
  const [showReservationModal, setShowReservationModal] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState<Accommodation | null>(null);

  const handleReserveClick = (place: Accommodation) => {
    setSelectedPlace(place);
    setShowReservationModal(true);
  };

  return (
    <>
      <Modal show={show} className="modal-distribution">
        <Modal.Header>
          <Modal.Title>Propiedades registradas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Ubicación</th>
                <th>Precio por noche</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {places.map((place) => (
                <tr key={place.id}>
                  <td>{place.name}</td>
                  <td>{place.location}</td>
                  <td>{place.price_per_night + ' $USD'}</td>
                  <td>
                    <Button className="general-button" onClick={() => handleReserveClick(place)}>Reservar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
      {showReservationModal && (
        <ReservationForm
          onClose={() => setShowReservationModal(false)}
          onReserve={(startDate: string, endDate: string) => {            
           alert(`Reservación para ${selectedPlace?.name} elaborada correctamente para la fecha ${startDate} hasta ${endDate}`)
          }}
        />
      )}
    </>
  );
};

export default ModalProperties;
