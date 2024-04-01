import React from "react";
import { Modal, Table } from "react-bootstrap";
import { Reservation } from "../../models/Interfaces";

interface ReservationHistoryModalProps {
  show: boolean;
  onClose: () => void;
  reservations: Reservation[];
}

const ReservationHistoryModal: React.FC<ReservationHistoryModalProps> = ({ show, onClose, reservations }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Mis Reservas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Fecha de Entrada</th>
              <th>Fecha de Salida</th>
              <th>Lugar</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.startDate}</td>
                <td>{reservation.endDate}</td>
                <td>{reservation.reservedPlace}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default ReservationHistoryModal;
