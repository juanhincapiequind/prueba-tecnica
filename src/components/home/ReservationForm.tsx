import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface ReservationProps {
    onClose: () => void;
    onReserve: (startDate: string, endDate: string) => void
}

const ReservationForm: React.FC<ReservationProps> = ({onClose, onReserve}) => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
    if (endDate && e.target.value && endDate < e.target.value) {
      setEndDate("");
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startDate || (e.target.value && e.target.value >= startDate)) {
      setEndDate(e.target.value);
    }
  };

  const handleReserve = () => {
    onReserve(startDate, endDate);
    onClose();
  }
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reservación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Fecha de entrada:</label>
        <Form.Control
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label>Fecha de salida:</label>
        <Form.Control
          value={endDate}
          onChange={handleEndDateChange}
          min={startDate}
          type="date"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleReserve}>Reservar</Button>
        <Button onClick={onClose}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReservationForm;
