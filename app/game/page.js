"use client";
import React from "react";
import Navbar3 from "@/app/components/navbar3";
import Image from "next/image";
import Link from "next/link";

export default function Game({ jogos }) {

    return (
        <div className="">
            <header>
                <Navbar3 />
            </header>

            <main className="flex flex-row flex-wrap fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4] justify-center w-screen" style={{
                backgroundImage: "url('/assets/fundo-carta.png')",
            }}>
                <div id="game">
                    <div className="flex justify-end p-5 items-center">
                        <Link className="right-[70%] absolute" href="/second">
                            <Image src="/assets/seta-voltar.svg" alt="seta-voltar"
                                width={40}
                                height={40}
                            />
                        </Link>
                        <h1>Jogo</h1>
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