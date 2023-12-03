"use client";
import React from "react";
import Navbar from "@/app/components/navbar";
import Ogame from "@/app/components/game";

export default function Game({jogos}) {

    return (
        <div>
            <header>
            <Navbar />
            </header>

            <main className="flex flex-row fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] justify-center w-screen" style={{
            backgroundImage: "url('/assets/fundo-carta.png')",
          }}>
            <div id="game" className="">
                <div>
                    <h1>jogo</h1>
                </div>
                <img 
                    
                />
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