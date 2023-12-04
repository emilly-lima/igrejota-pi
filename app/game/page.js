"use client";
import React from "react";
import Navbar3 from "@/app/components/navbar3";
import Ogame from "@/app/components/ogame";

export default function Game() {
    const [jogos, setJogos] = React.useState([]);

    return (
        <div className="">
            <header>
                <Navbar3 />
            </header>

            <main className="flex flex-row flex-wrap fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] justify-center w-screen" style={{ maxHeight: "calc(100vh-100px)" }}
            >
                <div
                    className="fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] w-screen"
                    style={{
                        backgroundImage: "url('/assets/fundo-lista.png')",
                    }}
                />
                <div
                    className="fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] w-screen"
                    style={{
                        backgroundImage: "url('/assets/fundo-carta.png')",
                    }}
                />
                <div className="rounded-3xl bg-zinc-800 w-[70%] h-[200px]" id="game">
                    <Ogame jogos={jogos} />
                </div>

            </main>

        </div>
    )
}