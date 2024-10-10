import { BASE_API_URL } from "./CONTANTS";

export async function sendRequest(path) {
  const response = await fetch(BASE_API_URL + path);

  if (!response.ok) {
    throw new Error("Failed to fetch events data");
  }

  const data = await response.json();

  return data;
}
