export async function fetchAvailablePlaces() {
  const response = await fetch(import.meta.env.VITE_BASE_API + "/places", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  const resData = await response.json();

  return resData.places;
}

export async function updateSelectedPlaces(places) {
  const response = await fetch(import.meta.env.VITE_BASE_API + "/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data...");
  }

  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch(import.meta.env.VITE_BASE_API + "/user-places");

  if (!response.ok) {
    throw new Error("Failed to fetch user places...");
  }

  const resData = await response.json();

  return resData.places;
}
