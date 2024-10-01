import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    const response = await fetch(import.meta.env.VITE_BASE_API + "/places", {
      method: "GET",
    });
    const resData = await response.json();

    setAvailablePlaces(resData.places);
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
