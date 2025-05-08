type pokemonData = {
  name: string;
  sprites: {
    front_default: string;
  };
  id: string;
};

export async function getPokemon(id: string): Promise<pokemonData> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return await response.json();
}

type Pokemon = {
  name: string;
  id: string;
};
export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = (await response.json()) as {
    results: { name: string; url: string }[];
  };

  return data.results.map((r) => ({
    name: r.name,
    id: r.url.split("/").slice(-2, -1)[0],
  }));
}
