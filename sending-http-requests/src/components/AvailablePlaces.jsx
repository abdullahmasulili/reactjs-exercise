import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    setIsFetching(true);
    const response = await fetch(import.meta.env.VITE_BASE_API + "/places", {
      method: "GET",
    });
    const resData = await response.json();

    setAvailablePlaces(resData.places);
    setIsFetching(false);
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
