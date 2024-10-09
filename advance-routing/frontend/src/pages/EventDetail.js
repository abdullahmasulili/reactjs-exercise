import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();
  const id = params.eventId;

  return <h1>Event {id} Details</h1>;
}
