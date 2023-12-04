"use client";
import React from "react";
import Navbar2 from "@/app/components/navbar2";
import Random from "../components/random";
import Card from "../components/card";
import { useGameTime } from "@/app/store/gameTime";
import { useFormato } from "@/app/store/formato";
import { useComplex } from "../store/complex";
import { useSearch } from "../store/search";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceFive } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

export default function Second() {

  //filters selects
  const [jogos, setJogos] = React.useState([]);
  const [players, setPlayers] = React.useState("0");
  const [gameStyle, setGameStyle] = React.useState("0");
  const [noGamesMessage, setNoGamesMessage] = React.useState(false);
  const [randomGame, setRandomGame] = React.useState(null);


  //filters carousel
  const { setTime, time } = useGameTime();
  const { setFormato, formato } = useFormato();
  const { setComplex, complex } = useComplex();

  //search
  const { search,setSearch } = useSearch();

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
      
        if (filteredGames.length === 0) {
          setNoGamesMessage(true); // Define o estado para exibir a mensagem
        } else {
          setNoGamesMessage(false); // Caso haja jogos, oculta a mensagem
        }

      }catch (error) {
        console.error("Erro ao buscar os jogos:", error);
        setNoGamesMessage(true);
      }
    };

    fetchGames();
  }, [search, time, formato, gameStyle, complex]);

  const handleTime = (e) => {
    switch (e) {
      case "1":
        setTime("15min");
        break;
      case "2":
        setTime("30min");
        break;
      case "3":
        setTime("45min");
        break;
      case "4":
        setTime("60min");
        break;
      case "5":
        setTime("90min");
        break;
      case "6":
        setTime("120min");
        break;
      default:
        setTime("0");
        break;
    }
  };
  
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

  const clearSearch = () => {
    setSearch('');
  };

  const chooseRandomGame = () => {
    if (jogos.length > 0) {
      const randomIndex = Math.floor(Math.random() * jogos.length);
      const randomGame = jogos[randomIndex]; 
      setSearch(randomGame.game); // Preenche o campo de busca com o nome do jogo randomizado
    } else {
      setNoGamesMessage(true);
    }
  };


  return (
    <div className="m-auto max-w-[100vw]">
      <div className="fixed z-[1000]">
        <Navbar2 />
        <div className="absolute ">
        <section
          id="filtros"
          className="flex justify-evenly items-center w-screen p-4 h-[70px] "
        >
          <select
            id="tempo"
            onClick={(e) => {
              handleTime(e.target.value);
            }}
            defaultValue={time}
          >
            <option value="0">Tempo de Jogo</option>
            <option value="1">15min</option>
            <option value="2">30min</option>
            <option value="3">45min</option>
            <option value="4">60min</option>
            <option value="5">90min</option>
            <option value="6">120min</option>
          </select>
          <select
            id="jogadores"
            onClick={(e) => {
              handlePlayers(e.target.value);
            }}
          >
            <option value="0">Nº de Jogadores</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6+</option>
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
            <option value="2">Intermediário</option>
            <option value="3">Dificil</option>
          </select>
          <div>
          </div>
          
        </section>
        </div>
        <aside></aside>
      </div>
      <main
        className="overflow-x-auto overflow-y-auto"
        style={{ maxHeight: "calc(100vh-100px)" }}
      >
        <div
          className="fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] w-screen"
          style={{
            backgroundImage: "url('/assets/fundo-lista.png')",
          }}
        />
      </main>
      <div>
      <Card jogos={jogos}/>
      <div className="fixed bottom-0 right-0 p-4">
  <div className="flex flex-col items-end">
    <button onClick={chooseRandomGame} className="mb-2"> 
      <img src="/assets/PNGS/DADOROSA.png" className="w-[70px] h-[70px] mr-[45px]" />
    </button>
    <button onClick={clearSearch}>
    <img src="/assets/novamente.svg" className="w-[100px] h-[40px] mr-[30px]" />
    </button>
  </div>
</div>
      {noGamesMessage && (
        <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
        <h1 className="text-4xl font-bold">SEM RESULTADOS!</h1>
        <h3 className="text-lg">Quer dar uma olhadinha em outros jogos?</h3>
        <img
          src="/assets/bunecos1lineart2.png"
          alt="Sem resultados"
          className="mt-4 mx-auto w-64"
        />
      </div>
    
      )} {/* Exibe a mensagem se nenhum jogo for encontrado */}
      </div>
    </div>
  );
}
