import { render, waitFor } from "@testing-library/react";
import PlacesGrid from "./PlacesGrid";
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

describe("PlaceGrid component", () => {
  it("Renders place name and locaiton", () => {
    const { getByText } = render(<Place place={mockPlace} onReserve={() => {}}  />);
    expect(getByText(mockPlace.name)).toBeInTheDocument();
    expect(getByText(mockPlace.location)).toBeInTheDocument();
  });

  it("Renders with lazyload images", async () => {
    const { findByAltText } = render(<Place place={mockPlace} onReserve={() => {}} />);
    await waitFor(async () => {
      const LazyLoadedImage = await findByAltText(mockPlace.name, {}, { timeout: 5000 }); // Ajustar el timeout a 5 segundos (5000 ms)
      expect(LazyLoadedImage).toBeInTheDocument();
    });
  });
});
