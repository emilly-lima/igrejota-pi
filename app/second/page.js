"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Random from "../components/random";
import Card from "../components/card";
import { useRef } from "react";
import { useState } from "react";

export default function Second() {
    const [jogos, setJogos] = React.useState([]);

    const temporef = useRef(null)
    const jogadoresref = useRef(null)
    const formatoref = useRef(null)
    const estiloref= useRef(null)
    const complexidaderef = useRef(null)

    const [filtros, setFiltros ] = useState([]);

    const handleselect = (filtro) => {
      setFiltros(old => [...old, ...filtro])
      console.log(filtros)
    }

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
        <div>
            <Navbar />
        <div className="m-auto max-w-[100vw]">
            
            
            <section className="flex flew-wrap justify-evenly items-center bg-zinc-300 w-full p-4 h-[80px]">
                <select ref={temporef} onSelect={handleselect(temporef.current.value)} id="tempo ">
                    <option value="todos-p">Tempo de Partida</option>
                    <option value="30">Menor que 30min</option>
                    <option value="60">Entre 30 e 60min</option>
                    <option value="90">Maior que 60min</option>
                </select>
                <select ref={jogadoresref} onSelect={handleselect(jogadoresref.current.value)} id="jogadores">
                    <option value="todos-j">Nº Jogadores</option>
                    <option value="1">Um</option>
                    <option value="2">Dois</option>
                    <option value="3">Mais de 3</option>
                </select>
                <select ref={formatoref} onSelect={handleselect(formatoref.current.value)} id="formato">
                    <option value="todos-f">Formato do Jogo</option>
                    <option value="tabuleiro">Tabuleiro</option>
                    <option value="carta">Cartas</option>
                    <option value="Dados">Dados</option>
                </select>
                <select ref={estiloref} onSelect={handleselect(estiloref.current.value)} id="estilo">
                    <option value="todos-e">Estilo de Jogo</option>
                    <option value="competitivo">Competitivo</option>
                    <option value="cooperativo">Cooperativo</option>
                    <option value="ambos">Ambos</option>
                </select>
                <select ref={complexidaderef} onSelect={handleselect(complexidaderef.current.value)} id="complexidade">
                    <option value="todos-c">Complexidade</option>
                    <option value="facil">Fácil</option>
                    <option value="medio">Médio</option>
                    <option value="dificil">Dificil</option>
                </select>
            </section>
            
            
            <Random />
            <aside>
            </aside>

            <main className="w-full h-screen">
                <Card jogos={jogos} />
            </main>

        </div>
        </div>
    )
}