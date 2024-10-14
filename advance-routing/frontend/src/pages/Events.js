import { Suspense } from "react";
import { useLoaderData, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList.js";
import { sendRequest } from "../utils/http.js";

export default function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await sendRequest(
    "/events",
    { method: "GET" },
    "Could not fetch events"
  );

  const resData = await response.json();

  return resData.events;
}

export async function loader() {
  return defer({
    events: loadEvents(),
  });
}
