import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const params = useParams();
  const id = params.eventId;
  const events = useSelector((state) => state.events.items);
  const event = events.find((item) => item.id === id);

  return <EventItem event={event} />;
}
