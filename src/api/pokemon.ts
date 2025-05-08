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
