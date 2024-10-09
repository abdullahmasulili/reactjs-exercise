import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import EventItem from "../components/EventItem";

import { fetchEventsData } from "../store/events-actions.js";

export default function EventsPage() {
  const events = useSelector((state) => state.events.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEventsData());
  }, [dispatch]);

  return (
    <>
      <h1>Your Events List</h1>
      <ul>
        {events.length > 0 &&
          events.map((event) => (
            <li key={event.id}>
              <EventItem event={event} />
            </li>
          ))}
      </ul>
    </>
  );
}
