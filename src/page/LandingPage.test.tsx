import { MatcherFunction, render } from "@testing-library/react";
import LandingPage from "./LandingPage";

describe("LandingPage component", () => {
  const selectedPlaces = [
    {
      id: 1,
      name: "Beach House in Miami",
      location: "Miami, Florida",
      price_per_night: 150,
      property_type: "House",
      amenities: ["Pool", "Ocean View", "WiFi"],
      image_url: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      name: "Downtown Apartment in New York City",
      location: "New York City, New York",
      price_per_night: 200,
      property_type: "Apartment",
      amenities: ["Gym", "Terrace", "WiFi"],
      image_url: "https://example.com/image2.jpg",
    },
  ];

  const beachHouseMatcher: MatcherFunction = (content: string, element: Element | null) => {
    const regex = /Beach House in Miami/;
    return regex.test(content || '');
};

const downtownApartmentMatcher: MatcherFunction = (content: string, element: Element | null) => {
    const regex = /Downtown Apartment in New York City/;
    return regex.test(content || '');
};

  it("Renders accommodation card correctly", () => {
    const { getByText } = render(<LandingPage places={selectedPlaces}/>);

    expect(getByText(beachHouseMatcher)).toBeInTheDocument();
    expect(getByText(downtownApartmentMatcher)).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { container } = render(<LandingPage places={selectedPlaces} />);
    expect(container).toMatchSnapshot();
  });
});
