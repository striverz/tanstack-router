import { createFileRoute, Link } from "@tanstack/react-router";
import { getPokemonList } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: RouteComponent,
  loader: getPokemonList,
});

function RouteComponent() {
  const pokemonDataList = Route.useLoaderData();

  return (
    <div>
      {pokemonDataList.map((r) => (
        <li className="flex p-2 m-2" key={r.id}>
          <Link to="/pokemon/$id" params={{ id: r.id }}>
            {r.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
