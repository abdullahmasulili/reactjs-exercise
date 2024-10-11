import { useRouteLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const { event } = useRouteLoaderData("event-detail");

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm method="POST" event={event} />
    </>
  );
}
