import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/Home";
import EventsLayout from "../layouts/EventsLayout";
import EventsPage from "../pages/Events";
import NewEventPage from "../pages/NewEvent";
import EditEventPage from "../pages/EditEvent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
            elementL: <EventsPage />,
          },
          {
            path: "new",
            element: <NewEventPage />,
          },
          {
            path: "edit",
            element: <EditEventPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
