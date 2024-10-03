import { BASE_API_URL } from "../util/CONSTANTS";

export async function fetchMeals() {
  const response = await fetch(BASE_API_URL + "/meals");

  if (!response.ok) {
    throw new Error("Failed to retrieve data...");
  }

  const resData = await response.json();

  return resData;
}
