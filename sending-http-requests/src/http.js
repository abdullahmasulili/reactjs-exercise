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
