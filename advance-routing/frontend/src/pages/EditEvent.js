import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { eventsActions } from "../store";

import EventForm from "../components/EventForm";

export default function EditEventPage() {
  const params = useParams();
  const id = params.eventId;
  const event = useSelector((state) => state.events.editItem) || {};
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
