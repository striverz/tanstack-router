import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>React TanStack Router</div>
      <li>
        <Link to="/" activeProps={{ className: "text-blue-500 font-bold" }}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/profile"
          activeProps={{ className: "text-blue-500 font-bold" }}
        >
          {({ isActive }) => <>Profile {isActive && "Page"}</>}
        </Link>
      </li>
      <li>
        <Link
          to="/pokemon"
          activeProps={{ className: "text-blue-500 font-bold" }}
        >
          Pokemon
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          search={{
            query: "manikanta",
            hasDiscount: true,
            categories: ["Clothing"],
          }}
        >
          Search
        </Link>
      </li>
      <Outlet />
    </React.Fragment>
  );
}
