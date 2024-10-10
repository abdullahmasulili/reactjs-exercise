import { sendRequest } from "../utils/http";

export async function eventsLoader() {
  const { events } = await sendRequest("/events");

  return events;
}
