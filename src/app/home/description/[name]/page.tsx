// app/pokemon/[name]/page.tsx
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function PokemonDetail({ params }: { params: { name: string } }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    if (!res.ok) {
        return <div className="text-center p-10">Pokémon not found</div>;
    }

    const data = await res.json();

    return (
        <div className="max-w-xl mx-auto p-6">
            <h1 className="text-4xl font-bold capitalize text-center mb-6">{data.name}</h1>

            <div className="bg-gray-400 shadow rounded p-4 text-center">
                <Image
                    src={data.sprites.other['official-artwork'].front_default}
                    alt={data.name}
                    width={200}
                    height={200}
                    className="mx-auto"
                />

                <div className="mt-4 text-black">
                    <p><strong>Types:</strong> {data.types.map((t: any) => t.type.name).join(', ')}</p>
                    <p><strong>Height:</strong> {data.height / 10} m</p>
                    <p><strong>Weight:</strong> {data.weight / 10} kg</p>
                    <p><strong>Base Exp:</strong> {data.base_experience}</p>
                </div>
            </div>
        </div>
    );
}
