"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Random from "../components/random";
import Card from "../components/card";
import { useGameTime } from "@/app/store/gameTime";
import { useFormato } from "@/app/store/formato";
import { useComplex } from "../store/complex";

export default function Second() {
  const [jogos, setJogos] = React.useState([]);
  const { setTime, time } = useGameTime();
  const { setFormato, formato } = useFormato();
  const { setComplex, complex } = useComplex();

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
    tempo: "0",
    jogadores: "0",
    formato: "0",
    estilo: "0",
    complexidade: "0",
  })

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue);
    // Aqui você pode fazer algo com o valor selecionado
  };



  return (
    <div className="m-auto max-w-[100vw]">
      <Navbar />
      <section id="filtros" className="flex justify-evenly items-center  p-4 h-[100px]">
        <select
          id="tempo"
          onClick={(e) => {
            setTime(e.target.value);
          }}
          defaultValue={time}
        >
          <option value="0">Tempo de Jogo</option>
          <option value="1">Menor que 30min</option>
          <option value="2">Entre 30 e 60min</option>
          <option value="3">Maior que 60min</option>
        </select>
        <select id="jogadores"
        >
          <option value="0">Nº de Jogadores</option>
          <option value="1">Um</option>
          <option value="2">Dois</option>
          <option value="3">Mais de 3</option>
        </select>
        <select id="formato"
          onClick={(e) => {
            setFormato(e.target.value);
          }}
          defaultValue={formato}>
          <option value="0">Formato de Jogo</option>
          <option value="1">Tabuleiro</option>
          <option value="2">Cartas</option>
          <option value="3">Dados</option>
        </select>
        <select id="estilo" className="hidden lg:flex">
          <option value="0">Estilo de Jogo</option>
          <option value="1">Competitivo</option>
          <option value="2">Cooperativo</option>
          <option value="3">Ambos</option>
        </select>
        <select id="complexidade" className="hidden lg:flex"
          onClick={(e) => {
            setComplex(e.target.value);
          }}
          defaultValue={complex}>
          <option value="0">Complexidade</option>
          <option value="1">Fácil</option>
          <option value="2">Médio</option>
          <option value="3">Dificil</option>
        </select>
      </section>
      {/*
      
      <section className="flex justify-evenly items-center p-4 h-[60px] lg:hidden mt-[-10px]"> 
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
      
      
      */}
      <aside></aside>

      <main className="md:w-full md:h-full overflow-x">
        <div className="fixed w-[100%] z-[-2] bottom-0 h-[calc(100%+200px)];">
          <img src="/assets/fundolistaaRED.png" />
        </div>
        <Card jogos={jogos} />
      </main>
    </div>
  );
}