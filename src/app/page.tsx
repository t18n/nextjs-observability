import { fetchPokemons } from "@/utils/fetch-pokemons";
import Link from "next/link";

export default async function Home() {
  const pokemons = await fetchPokemons(10); // Adjust the limit as needed

  return (
    <div>
      <h1>My Pokemons</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
