"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Ogame from "@/app/components/game";

export default function Game() {
    const [jogos, setJogos] = React.useState([]);

    React.useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch("jogos.json");
                const games = await response.json();
                console.log(games);
                setJogos(games);
            } catch (error) {
                console.error("Erro ao buscar os jogos:", error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <header>
                <Navbar />
            </header>
            <div className="flex flex-row h-full">
                <div className="w-1/5"></div>
                <main className="flex w-3/5 bg-zinc-600">
                    <Ogame jogos={jogos} />
                </main>
                <div className="w-1/5"></div>
            </div>
        </div>
    )
}