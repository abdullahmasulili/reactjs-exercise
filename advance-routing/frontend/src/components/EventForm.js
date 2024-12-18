import {
  useNavigate,
  Form,
  useNavigation,
  useActionData,
  redirect,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { NAVIGATION } from "../utils/CONTANTS";
import { sendRequest } from "../utils/http";

function EventForm({ method, event }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === NAVIGATION.STATE.SUBMITTING;

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event?.title || ""}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event?.image || ""}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event?.date || ""}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          defaultValue={event?.description || ""}
          required
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const method = request.method;
  const id = params?.eventId || null;
  const data = await request.formData();
  const eventData = Object.fromEntries(data.entries());
  let path = "/events";

  if (id && method === "PATCH") {
    path = path.concat(`/${id}`);
  }

  try {
    await sendRequest(
      path,
      {
        method,
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
