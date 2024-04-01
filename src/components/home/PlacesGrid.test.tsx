import { render, waitFor } from "@testing-library/react";
import PlacesGrid from "./PlacesGrid";
import Place from "./Place";

const mockPlace = {
  id: 1,
  name: "Beach House in Miami",
  location: "Miami, Florida",
  image_url: "https://example.com/image1.jpg",
  price_per_night: 150,
  property_type: "House",
  amenities: ["Pool", "Ocean View", "WiFi"],
};

describe("Place component", () => {
  it("Renders place name and locaiton", () => {
    const { getByText } = render(<Place place={mockPlace} />);
    expect(getByText(mockPlace.name)).toBeInTheDocument();
    expect(getByText(mockPlace.location)).toBeInTheDocument();
  });

  it("Renders with lazyload images", async () => {
    const { findByAltText } = render(<Place place={mockPlace} />);
    await waitFor(async () => {
      const LazyLoadedImage = await findByAltText(mockPlace.name);
      expect(LazyLoadedImage).toBeInTheDocument();
    });
  });
});
