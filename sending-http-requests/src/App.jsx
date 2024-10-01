import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";

import { fetchUserPlaces, updateSelectedPlaces } from "./http.js";
import Error from "./components/Error.jsx";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);
  const [errorUpdatingPlaces, setErrorUpdatingPlaces] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try {
      await updateSelectedPlaces([selectedPlace, ...userPlaces]);
    } catch (error) {
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || "Failed to update the selected places",
      });
    }
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setUserPlaces((prevPickedPlaces) =>
        prevPickedPlaces.filter(
          (place) => place.id !== selectedPlace.current.id
        )
      );

      const updatedPlaces = userPlaces.filter(
        (place) => place.id !== selectedPlace.current.id
      );

      try {
        await updateSelectedPlaces(updatedPlaces);
      } catch (error) {
        setUserPlaces(userPlaces);
        setErrorUpdatingPlaces({
          message: error.message || "Failed to remove selected place",
        });
      }

      setModalIsOpen(false);
    },
    [userPlaces]
  );

  const handleCloseErrorModal = useCallback(() => {
    setErrorUpdatingPlaces(null);
  }, []);

  async function handleFetchUserPlaces() {
    setIsFetching(true);

    try {
      const places = await fetchUserPlaces();
      setUserPlaces(places);
    } catch (error) {
      setFetchError({
        message: error.message || "Failed to fetch user places...",
      });
    }

    setIsFetching(false);
  }

  useEffect(() => {
    handleFetchUserPlaces();
  }, []);

  return (
    <>
      <Modal open={errorUpdatingPlaces} onClose={handleCloseErrorModal}>
        {errorUpdatingPlaces && (
          <Error
            title="An Error Occurred!"
            message={errorUpdatingPlaces.message}
            onConfirm={handleCloseErrorModal}
          />
        )}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {fetchError && !isFetching && (
          <Error title="An Error Occured!" message={fetchError.message} />
        )}
        {!isFetching && !fetchError && (
          <Places
            title="I'd like to visit ..."
            fallbackText="Select the places you would like to visit below."
            isLoading={isFetching}
            loadingText="Fething selected places"
            places={userPlaces}
            onSelectPlace={handleStartRemovePlace}
          />
        )}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
