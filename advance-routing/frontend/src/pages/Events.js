import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList.js";

export default function EventsPage() {
  const events = useLoaderData();

  return <EventsList events={events} />;
}
