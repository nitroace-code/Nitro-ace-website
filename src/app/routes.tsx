import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { OurStory } from "./pages/OurStory";
import { Team } from "./pages/Team";
import { Events } from "./pages/Events";
import { Contact } from "./pages/Contact";
import { Sponsorship } from "./pages/Sponsorship";
import { Admin } from "./pages/Admin";
import { Cars } from "./pages/Cars";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "cars", Component: Cars },
      { path: "our-story", Component: OurStory },
      { path: "team", Component: Team },
      { path: "events", Component: Events },
      { path: "sponsorship", Component: Sponsorship },
      { path: "contact", Component: Contact },
      { path: "admin", Component: Admin },
      { path: "*", Component: NotFound },
    ],
  },
]);