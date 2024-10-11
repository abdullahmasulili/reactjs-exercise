import { json } from "react-router-dom";
import { BASE_API_URL } from "./CONTANTS";

export async function sendRequest(path) {
  const response = await fetch(BASE_API_URL.concat(path));

  if (!response.ok) {
    throw json(
      { message: "Could not fetch the events" },
      {
        status: 500,
      }
    );
  }

  return response;
}
