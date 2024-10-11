import { BASE_API_URL } from "./CONTANTS";

export async function sendRequest(path) {
  const response = await fetch(BASE_API_URL + path);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
      status: 500,
    });
  }

  return response;
}
