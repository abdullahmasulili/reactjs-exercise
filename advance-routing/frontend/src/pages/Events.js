import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchEventsData } from "../store/events-actions.js";

import EventsList from "../components/EventsList.js";

export default function EventsPage() {
  const {
    items: events,
    isLoading,
    error,
  } = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Fetching Events</p>;
  }

  if (error) {
    return (
      <div>
        <h1>An Error Occured!</h1>
        <p>Please contact customer support</p>
      </div>
    );
  }

  return <EventsList events={events} />;
}
