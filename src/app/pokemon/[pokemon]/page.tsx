import Link from "next/link";

type PokemonProps = {
  params: {
    pokemon: string;
  }
}

export default function Pokemon({ params: { pokemon } }: PokemonProps) {
  return (
    <div>
      <h1>{pokemon}</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
