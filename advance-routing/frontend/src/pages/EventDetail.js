import { useLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";
import { sendRequest } from "../utils/http";

export default function EventDetailPage() {
  const { event } = useLoaderData();

  return <EventItem event={event} />;
}

export async function loader({ params }) {
  const id = params.eventId;
  const response = await sendRequest(`/events/${id}`, {
    method: "GET",
  });

  return response;
}
