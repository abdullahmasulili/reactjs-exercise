import { json } from "react-router-dom";
import { BASE_API_URL } from "./CONTANTS";

export async function sendRequest(path, configs, fallbackMsg) {
  const response = await fetch(BASE_API_URL.concat(path), configs);

  if (!response.ok) {
    throw json(
      { message: fallbackMsg || "Something went wrong!" },
      {
        status: 500,
      }
    );
  }

  return response;
}
