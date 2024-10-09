import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

export default function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
