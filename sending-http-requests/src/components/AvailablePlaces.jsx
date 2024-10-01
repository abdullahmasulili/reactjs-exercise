import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    setIsFetching(true);

    try {
      const response = await fetch(import.meta.env.VITE_BASE_API + "/places", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch places");
      }

      const resData = await response.json();
      setAvailablePlaces(resData.places);
    } catch (error) {
      setError({
        message:
          error.message ||
          "Could not fetch places, please check your connection and try again..",
      });
    }

    setIsFetching(false);
  }

  if (error) {
    return <Error title="An Error Occurred!" message={error.message} />;
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
