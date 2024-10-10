import { eventsActions } from ".";
import { sendRequest } from "../utils/http";

export const fetchEventsData = () => {
  return async (dispatch) => {
    dispatch(eventsActions.setIsLoading(true));

    try {
      const { events } = await sendRequest("/events");

      dispatch(eventsActions.setEventsData(events));
      dispatch(eventsActions.setIsLoading(false));
    } catch (error) {
      dispatch(eventsActions.setError(error.message));
      dispatch(eventsActions.setIsLoading(false));
    }
  };
};
