import axios from "axios";

export async function getPropertyTypes() {
  const url = "https://airbnb19.p.rapidapi.com/api/v1/getPropertyType";
  try {
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "382dd93c9amshd760b30efcc24fcp14e22djsne7a7c5226add",
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getPropertyByPlace(place: string, persons: number) {
  const url = "https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace";
  try {
    const response = await axios.get(url, {
      params: {
        id: "ChIJ7cv00DwsDogRAMDACa2m4K8",
        display_name: place,
        totalRecords: "40",
        currency: "USD",
        adults: persons ? persons : 1,
      },
      headers: {
        "X-RapidAPI-Key": "382dd93c9amshd760b30efcc24fcp14e22djsne7a7c5226add",
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}