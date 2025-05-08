import * as React from "react";
import {
  Link,
  Outlet,
  createRootRoute,
  useNavigate,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});
const navigate = useNavigate();
const handleHome = () => [
  navigate({
    to: "/",
  }),
];
function RootComponent() {
  return (
    <React.Fragment>
      <div>React TanStack Router</div>
      <li>
        <div onClick={handleHome}>Home/Root</div>
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
