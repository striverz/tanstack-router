import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

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
      <Link
        to="/contact-us"
        activeProps={{ className: "text-blue-400 font-bold p-2 m-2" }}
      >
        Contact Us Page
      </Link>
      <Link to="/category">Category</Link>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
