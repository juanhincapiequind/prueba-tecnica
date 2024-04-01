import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Place from "./Place";

const mockPlace = {
  id: 1,
  name: "Beach House in Miami",
  location: "Miami, Florida",
  image_url: "https://a0.muscache.com/im/pictures/53822c6d-548b-4a22-a90d-44380d975a82.jpg?im_w=720",
  price_per_night: 150,
  property_type: "House",
  amenities: ["Pool", "Ocean View", "WiFi"],
};

describe("Place component", () => {
  it("Renders place name and location", () => {
    const { getByText } = render(<Place place={mockPlace} onReserve={() => {}} />);
    expect(getByText(mockPlace.name)).toBeInTheDocument();
    expect(getByText(mockPlace.location)).toBeInTheDocument();
  });

  it("Opens modal on button click", async () => {
    const { getByText, findByText } = render(<Place place={mockPlace} onReserve={() => {}} />);
    fireEvent.click(getByText("Más información"));
    const modalTitle = await findByText(mockPlace.name);
    expect(modalTitle).toBeInTheDocument();
  });

  it("Opens reservation modal on reserve button click", async () => {
    const { getByText, findByText } = render(<Place place={mockPlace} onReserve={() => {}} />);
    fireEvent.click(getByText("Reservar"));
    const modalTitle = await findByText("Reservar");
    expect(modalTitle).toBeInTheDocument();
  });

  it("Calls onReserve when reservation form is submitted", async () => {
    const onReserveMock = jest.fn();
    const { getByText, findByText } = render(<Place place={mockPlace} onReserve={onReserveMock} />);
    fireEvent.click(getByText("Reservar"));
    fireEvent.click(getByText("Reservar ahora"));
    await waitFor(() => {
      expect(onReserveMock).toHaveBeenCalled();
    });
  });
});
