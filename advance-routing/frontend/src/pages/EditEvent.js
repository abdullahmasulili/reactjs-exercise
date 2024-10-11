import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useRouteLoaderData } from "react-router-dom";

import { eventsActions } from "../store";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const params = useParams();
  const id = params.eventId;
  const { event } = useRouteLoaderData("event-detail");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(eventsActions.setEditEvent(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>Edit Event</h1>
      <EventForm method="POST" event={event} />
    </>
  );
}
