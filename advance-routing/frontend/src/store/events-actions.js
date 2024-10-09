import { eventsActions } from ".";
import { BASE_API_URL } from "../utils/CONTANTS";

export const fetchEventsData = () => {
  return async (dispatch) => {
    async function sendRequest() {
      const response = await fetch(BASE_API_URL + "/events");

      if (!response.ok) {
        throw new Error("Failed to fetch events data");
      }

      const data = await response.json();

      return data;
    }

    try {
      const { events } = await sendRequest();

      dispatch(eventsActions.setEventsData(events));
    } catch (error) {
      console.log(error);
    }
  };
};
