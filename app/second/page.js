"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Random from "../components/random";
import Card from "../components/card";
import { useGameTime } from "../store/gameTime";

export default function Second() {
  const [jogos, setJogos] = React.useState([]);
  const { setTime, time } = useGameTime();

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

  console.log(time);

  const [filtros, setFiltros] = React.useState({
    tempo: "todos",
    jogadores: "todos-j",
    formato: "todos-f",
    estilo: "todos-e",
    complexidade: "todos-c",
  })

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    // Aqui você pode fazer algo com o valor selecionado
  };



  return (
    <div className="m-auto max-w-[100vw]">
      <Navbar />
      <section className="flex justify-evenly items-center bg-zinc-300  p-4 h-[80px]">
        <select    
          id="tempo"
          onChange={handleSelectChange}
        >
          <option value="todos">Tempo de Jogo</option>
          <option value="30min">Menor que 30min</option>
          <option value="60min">Entre 30 e 60min</option>
          <option value="90min">Maior que 60min</option>
        </select>
        <select id="jogadores">
          <option value="todos-j">Nº de Jogadores</option>
          <option value="1">Um</option>
          <option value="2">Dois</option>
          <option value="3">Mais de 3</option>
        </select>
        <select id="formato">
          <option value="todos-f">Formato de Jogo</option>
          <option value="tabuleiro">Tabuleiro</option>
          <option value="carta">Cartas</option>
          <option value="Dados">Dados</option>
        </select>
        <select id="estilo" className="hidden lg:flex">
          <option value="todos-e">Estilo de Jogo</option>
          <option value="competitivo">Competitivo</option>
          <option value="cooperativo">Cooperativo</option>
          <option value="ambos">Ambos</option>
        </select>
        <select id="complexidade" className="hidden lg:flex">
          <option value="todos-c">Complexidade</option>
          <option value="facil">Fácil</option>
          <option value="medio">Médio</option>
          <option value="dificil">Dificil</option>
        </select>
      </section>
      <section className="flex justify-evenly items-center bg-zinc-300 p-4 h-[60px] lg:hidden mt-[-10px]"> 
            <select id="estilo">
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
            </section>
            <Random />
      <aside></aside>

      <main className="w-full h-screen">
        <Card jogos={jogos} />
      </main>
    </div>
  );
}