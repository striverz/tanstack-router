import { getCities } from "@/lib/mock";
import { Link, notFound, Outlet } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/$country")({
  component: RouteComponent,
  loader: async ({ params: { country } }) => {
    const cities = await getCities(country);
    if (!cities) throw notFound();
    else return { cities };
  },
  pendingComponent: () => <div>Cities are loading...</div>,
});

function RouteComponent() {
  const { cities } = Route.useLoaderData();

  return (
    <div>
      {cities.map((city) => (
        <Link
          to="/contact-us/$country/$city"
          params={{ city }}
          from="/contact-us/$country"
          className="p-2 m-2 text-purple-400"
        >
          {city}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
