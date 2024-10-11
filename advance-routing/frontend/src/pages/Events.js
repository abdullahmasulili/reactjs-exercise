import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList.js";
import { sendRequest } from "../utils/http.js";

export default function EventsPage() {
  const { events, isError, message } = useLoaderData();

  if (isError) {
    return <p>{message}</p>;
  }

  return <EventsList events={events} />;
}

export async function loader() {
  const response = await sendRequest("/events");

  return response;
}
