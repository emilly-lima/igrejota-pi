"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Random from "../components/random";
import Card from "../components/card";

export default function Second() {
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
    // rest of your component
    return (
        <div className="m-auto max-w-[100vw]">
            <Navbar />
            <section className="flex justify-evenly bg-zinc-300 w-full p-4">
                <select className="appearence-none" id="tempo">
                    <option value="todos-p">Tempo de Partida</option>
                    <option value="30">Menor que 30min</option>
                    <option value="60">Entre 30 e 60min</option>
                    <option value="90">Maior que 60min</option>
                </select>
                <select id="jogadores">
                    <option value="todos-j">Nº Jogadores</option>
                    <option value="1">Um</option>
                    <option value="2">Dois</option>
                    <option value="3">Mais de 3</option>
                </select>
                <select id="formato">
                    <option value="todos-f">Formato do Jogo</option>
                    <option value="tabuleiro">Tabuleiro</option>
                    <option value="carta">Cartas</option>
                    <option value="Dados">Dados</option>
                </select>
                <select>
                    <option value="todos-e">Estilo de Jogo</option>
                    <option value="competitivo">Competitivo</option>
                    <option value="cooperativo">Cooperativo</option>
                    <option value="ambos">Ambos</option>
                </select>
                <select id="complexidade">
                    <option value="todos-c">Complexidade</option>
                    <option value="facil">Fácil</option>
                    <option value="medio">Médio</option>
                    <option value="dificil">Dificil</option>
                </select>

                <Random />
            </section>

            <aside>

            </aside>

            <main className="w-full h-screen">
                <Card jogos={jogos} />
            </main>

        </div>
    )
}