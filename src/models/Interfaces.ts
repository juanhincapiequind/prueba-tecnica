export interface PlaceInterfaz {
  id: number;
  title: string;
}

export interface SearchButtonProps {
  onSearch: (query: string) => void;
}

export interface SearchComponentProps {
  imgUrl: string;
  description: string;
}

export interface Accommodation {
  id: number;
  name: string;
  location: string;
  price_per_night: number;
  property_type: string;
  amenities: string[];
  image_url: string;
}

export interface Reservation {
  startDate: string;
  endDate: string;
  reservedPlace: string;
}
