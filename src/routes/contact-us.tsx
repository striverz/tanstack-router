import { getCountries } from "@/lib/mock";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us")({
  component: RouteComponent,
  //This is makes an api call for fetching
  loader: async () => {
    const countries = await getCountries();
    return { countries };
  },

  //loader meanwhile the data is getting loaded
  pendingComponent: () => <div>The Countries are loading...</div>,
});

function RouteComponent() {
  const { countries } = Route.useLoaderData();
  return (
    <div className="m-2 p-2 flex gap-4">
      {countries.map((country) => (
        <Link
          to="/contact-us/$country"
          params={{ country: country.name }}
          className="text-green-400"
        >
          {country.name}
        </Link>
      ))}

      <Outlet />
    </div>
  );
}
