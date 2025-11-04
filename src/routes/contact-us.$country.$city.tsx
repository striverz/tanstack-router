import { getCities } from "@/lib/mock";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/$country/$city")({
  component: RouteComponent,
  loader: async ({ params: { country, city } }) => {
    const cities = await getCities(country);
    if (!cities.indexOf(city)) throw notFound();

    return { city };
  },
});

function RouteComponent() {
  const { city } = Route.useLoaderData();

  return (
    <>
      <div>Selected City is : </div>
      <span>{city}</span>
    </>
  );
}
