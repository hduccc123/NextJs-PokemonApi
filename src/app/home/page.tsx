// app/pokemon/page.tsx
'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

type Pokemon = {
    name: string;
    image: string;
};

const LIMIT = 16; // Số lượng Pokémon mỗi trang

const Homepage = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [page, setPage] = useState(1); // trang hiện tại
    const [isLoading, setIsLoading] = useState(false);
    const [count, setCount] = useState(0); // tổng số Pokémon
    const totalPages = Math.ceil(count / LIMIT);

    // Gọi API khi component mount
    useEffect(() => {
        const fetchPokemons = async () => {
            setIsLoading(true);
            const offset = (page - 1) * LIMIT;
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
            const data = await res.json();
            setCount(data.count);

            // Lấy thêm hình ảnh cho từng Pokémon
            const detailed = await Promise.all(
                data.results.map(async (poke: any) => {
                    const res = await fetch(poke.url);
                    const detail = await res.json();
                    return {
                        name: poke.name,
                        image: detail.sprites.front_default,
                    };
                })
            );

            setPokemons(detailed);
            setIsLoading(false);
        };

        fetchPokemons();
    }, [page]);

    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (page <= 4) {
                pages.push(1, 2, 3, 4, 5, '...', totalPages);
            } else if (page >= totalPages - 3) {
                pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', page - 1, page, page + 1, '...', totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 text-center text color: var(--foreground)">Pokémon List</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pokemons.map((poke, idx) => (
                    <Link href={`/home/description/${poke.name}`} key={idx} className="group">
                        <div key={idx} className="bg-gray-400 rounded-lg shadow p-4 text-center hover:scale-105 duration-200 text-black">
                            <Image
                                src={poke.image}
                                alt={poke.name}
                                width={96}
                                height={96}
                                className="mx-auto"
                            />
                            <p className="capitalize mt-2 font-medium">{poke.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
            {/* Phân trang nâng cao */}
            <div className="flex justify-center items-center flex-wrap gap-2 mt-8">
                {/* Nút Prev */}
                <button
                    className="px-3 py-1 rounded bg-gray-400 hover:bg-gray-500 disabled:opacity-50"
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                >
                    <FontAwesomeIcon icon={faArrowLeftLong} />
                </button>

                {/* Nút số trang */}
                {getPageNumbers().map((num, i) => (
                    <button
                        key={i}
                        disabled={num === '...'}
                        onClick={() => typeof num === 'number' && setPage(num)}
                        className={`px-3 py-1 rounded ${page === num
                            ? 'bg-black text-white font-bold'
                            : num === '...'
                                ? 'bg-transparent text-gray-500 cursor-default'
                                : 'bg-gray-500 hover:bg-gray-300'
                            }`}
                    >
                        {num}
                    </button>
                ))}

                {/* Nút Next */}
                <button
                    className="px-3 py-1 rounded bg-gray-400 hover:bg-gray-500 disabled:opacity-50"
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );

};

export default Homepage;

