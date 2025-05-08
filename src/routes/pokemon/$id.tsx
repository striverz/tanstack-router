import { createFileRoute } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/$id")({
  component: RouteComponent,
  loader: async ({ params }) => getPokemon(params.id),
});

function RouteComponent() {
  const pokemonData = Route.useLoaderData();
  const { id } = Route.useParams();

  return (
    <div>
      <h1>
        <span>{id} </span>
        {pokemonData.name}{" "}
      </h1>
      <img src={pokemonData.sprites.front_default}></img>
    </div>
  );
}
