"use client";
import React from "react";
import Navbar2 from "@/app/components/navbar2";
import Random from "../components/random";
import Card from "../components/card";
import { useGameTime } from "@/app/store/gameTime";
import { useFormato } from "@/app/store/formato";
import { useComplex } from "../store/complex";
import { useSearch } from "../store/search";

export default function Second() {

  //filters selects
  const [jogos, setJogos] = React.useState([]);
  const [players, setPlayers] = React.useState("0");
  const [gameStyle, setGameStyle] = React.useState("0");

  //filters carousel
  const { setTime, time } = useGameTime();
  const { setFormato, formato } = useFormato();
  const { setComplex, complex } = useComplex();

  //search
  const { search } = useSearch();

  console.log(complex);

  React.useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("jogos.json");
        const games = await response.json();

        const filteredGames = games.filter((jogo) => {
          const searchMatches = jogo.game?.toLowerCase().includes(
            search?.toLowerCase()
          );
          // const playersMatch =
          // players === "0" || (jogo.Njoga && jogo.Njoga.includes(players));

          const timeMatch = time === "0" || jogo.time?.includes(time);

          const fomatoMatch =
            formato === "0" || jogo.format?.includes(formato);

          const gameStyleMatch =
            gameStyle === "0" || jogo.gameStyle?.includes(gameStyle);

          const complexMatch = complex === "0" || jogo.complexity?.includes(complex);

          return (
            searchMatches &&
            timeMatch &&
            fomatoMatch &&
            gameStyleMatch &&
            complexMatch
          );
        });

        setJogos(filteredGames);
      } catch (error) {
        console.error("Erro ao buscar os jogos:", error);
      }
    };

    fetchGames();
  }, [search, time, formato, gameStyle, complex]);

  const handleFormato = (e) => {
    switch (e) {
      case "1":
        setFormato("Tabuleiro");
        break;
      case "2":
        setFormato("Cartas");
        break;
      case "3":
        setFormato("Dados");
        break;
      default:
        setFormato("0");
        break;
    }
  };

  const handleGameStyle = (e) => {
    switch (e) {
      case "1":
        setGameStyle("Competitivo");
        break;
      case "2":
        setGameStyle("Cooperativo");
        break;
      case "3":
        setGameStyle("Ambos");
        break;
      default:
        setGameStyle("0");
        break;
    }
  };

  const handleComplex = (e) => {
    switch (e) {
      case "1":
        setComplex("Fácil");
        break;
      case "2":
        setComplex("Médio");
        break;
      case "3":
        setComplex("Dificil");
        break;
      default:
        setComplex("0");
        break;
    }
  };

  const handlePlayers = (e) => {
    switch (e) {
      case "1":
        setPlayers("1");
        break;
      case "2":
        setPlayers("2");
        break;
      case "3":
        setPlayers("3");
        break;
      default:
        setPlayers("0");
        break;
    }
  };

  return (
    <div className="m-auto max-w-[100vw]">
      <div className="fixed">
        <Navbar2 />
        <section
          id="filtros"
          className="flex justify-evenly items-center w-screen p-4 h-[70px]"
        >
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
          <select
            id="jogadores"
            onClick={(e) => {
              handlePlayers(e.target.value);
            }}
          >
            <option value="0">Nº de Jogadores</option>
            <option value="1">Um</option>
            <option value="2">Dois</option>
            <option value="3">Mais de 3</option>
          </select>
          <select
            id="formato"
            onClick={(e) => {
              handleFormato(e.target.value);
            }}
            defaultValue={formato}
          >
            <option value="0">Formato de Jogo</option>
            <option value="1">Tabuleiro</option>
            <option value="2">Cartas</option>
            <option value="3">Dados</option>
          </select>
          <select
            id="estilo"
            defaultValue={gameStyle}
            onClick={(e) => {
              handleGameStyle(e.target.value);
            }}
          >
            <option value="0">Estilo de Jogo</option>
            <option value="1">Competitivo</option>
            <option value="2">Cooperativo</option>
            <option value="3">Ambos</option>
          </select>
          <select
            id="complexidade"
            onClick={(e) => {
              handleComplex(e.target.value);
            }}
            defaultValue={complex}
          >
            <option value="0">Complexidade</option>
            <option value="1">Fácil</option>
            <option value="2">Médio</option>
            <option value="3">Dificil</option>
          </select>
        </section>
        <aside></aside>
      </div>
      <main
        className="overflow-x-auto overflow-y-auto"
        style={{ maxHeight: "calc(100vh-100px)" }}
      >
        <div
          className="fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4]  w-screen"
          style={{
            backgroundImage: "url('/assets/fundo-lista.png')",
          }}
        />
      </main>
      <Card jogos={jogos} />
    </div>
  );
}
