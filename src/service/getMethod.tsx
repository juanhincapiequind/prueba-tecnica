import axios from "axios";

export async function getPlaces() {
  const url = "https://airbnb19.p.rapidapi.com/api/v1/getPropertyType";
  try {
    const response = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "c0433120b7msh4816f52dcd3c0f9p15efddjsn39a356b9f4b6",
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
      },
    });
    return response.data
  } catch (error) {
    console.log(error);
  }
}
