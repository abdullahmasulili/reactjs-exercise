import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home";
import EventsLayout from "../layouts/EventsLayout";
import EventsPage, { loader as eventsLoader } from "../pages/Events";
import NewEventPage from "../pages/NewEvent";
import EditEventPage from "../pages/EditEvent";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from "../pages/EventDetail";
import ErrorPage from "../pages/Error";
import { action as submitEventAction } from "../components/EventForm";
import NewsletterPage, {
  action as newsletterAction,
} from "../pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: submitEventAction,
              },
            ],
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: submitEventAction,
          },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

export default router;
