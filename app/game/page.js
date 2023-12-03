"use client";
import React from "react";
import Navbar from "@/app/components/navbar";

export default function Game({jogos}) {

    return (
        <div className="">
            <header>
            <Navbar />
            </header>

            <main className="flex flex-row flex-wrap fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] justify-center w-screen" style={{
            backgroundImage: "url('/assets/fundo-carta.png')",
          }}>
            <div id="game">
                <div className="p-5">
                    <h1>jogo</h1>
                </div>
                <div className="rounded-3xl bg-zinc-800 w-[70%] h-[200px]">
                    
                </div>
                <div className="pt-5">
                    <h2>critérios</h2>
                </div>
                <div className="p-2" id="descricao">
                    <h2>descrição</h2>
                </div>
            </div>
            </main>

        {/*<div className="flex flex-col h-screen" >
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
        */}

        </div>
    )
}