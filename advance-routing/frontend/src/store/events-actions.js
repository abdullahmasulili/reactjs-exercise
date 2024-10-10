import { eventsActions } from ".";
import { BASE_API_URL } from "../utils/CONTANTS";

export const fetchEventsData = () => {
  return async (dispatch) => {
    dispatch(eventsActions.setIsLoading(true));

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
      dispatch(eventsActions.setIsLoading(false));
    } catch (error) {
      dispatch(eventsActions.setError(error.message));
      dispatch(eventsActions.setIsLoading(false));
    }
  };
};
