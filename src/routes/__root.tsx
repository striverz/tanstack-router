import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Link
        activeProps={{ className: "text-blue-400 font-bold p-2 m-2 " }}
        to="/"
      >
        Main Page
      </Link>
      <Link
        activeProps={{ className: "text-blue-400 font-bold p-2 m-2" }}
        to="/about"
      >
        About Us Page
      </Link>
      <Outlet />
    </React.Fragment>
  );
}
