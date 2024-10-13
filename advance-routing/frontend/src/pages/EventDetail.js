import { useRouteLoaderData, redirect } from "react-router-dom";

import EventItem from "../components/EventItem";
import { sendRequest } from "../utils/http";

export default function EventDetailPage() {
  const { event } = useRouteLoaderData("event-detail");

  return <EventItem event={event} />;
}

export async function loader({ params }) {
  const id = params.eventId;
  const response = await sendRequest(
    `/events/${id}`,
    { method: "GET" },
    "Could not fetch event data"
  );

  return response;
}

export async function action({ params }) {
  const id = params.eventId;

  try {
    await sendRequest(
      `/events/${id}`,
      {
        method: "DELETE",
      },
      "Could not delete the event"
    );

    return redirect("/events");
  } catch (error) {
    console.log(error);
  }
}
