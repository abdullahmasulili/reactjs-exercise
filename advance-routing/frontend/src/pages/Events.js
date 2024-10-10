import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList.js";
import { sendRequest } from "../utils/http.js";

export default function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}

export async function loader() {
  const { events } = await sendRequest("/events");

  return events;
}
