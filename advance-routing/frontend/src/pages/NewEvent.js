import { redirect } from "react-router-dom";

import EventForm from "../components/EventForm";
import { sendRequest } from "../utils/http";

export default function NewEventPage() {
  return (
    <>
      <EventForm method="post" />
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());

  try {
    await sendRequest(
      "/events",
      {
        method: "POST",
        body: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      },
      "Could not save event."
    );

    return redirect("/events");
  } catch (error) {
    return error;
  }
}
