import { trace } from "@opentelemetry/api";

export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: Pokemon[];
}

/**
 * Fetch a list of Pokémon from the PokéAPI.
 *
 * @param limit - The number of Pokémon to fetch (default is 10).
 * @returns A promise that resolves to an array of Pokémon.
 */
export const fetchPokemons = async (limit: number = 10): Promise<Pokemon[]> => {
  const POKEMON_API_URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  return await trace
    .getTracer('nextjs-example')
    .startActiveSpan('fetchPokemons', async (span) => {

      try {
        const response = await fetch(POKEMON_API_URL);

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const data: PokemonResponse = await response.json();
        return data.results;
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        throw new Error('Failed to fetch Pokémon data');
      } finally {
        span.end()
      }
    })
};
