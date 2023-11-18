"use client";
import Navbar from "@/app/components/navbar";
import Random from "../components/random";
import Card from "../components/card";

export default function Second() {
    return (
        <div className="m-auto">
            <Navbar />
            <section className="flex justify-evenly bg-zinc-300 w-full p-4">
                <select className="appearence-none">
                    <option value="none">Tempo de Partida</option>
                    <option value="1">Selecione</option>
                    <option value="2">Selecione</option>
                    <option value="3">Selecione</option>
                </select>
                <select>
                    <option value="none">Nº Jogadores</option>
                    <option value="1">Selecione</option>
                    <option value="2">Selecione</option>
                    <option value="3">Selecione</option>
                </select>
                <select>
                    <option value="none">Formato do Jogo</option>
                    <option value="1">Selecione</option>
                    <option value="2">Selecione</option>
                    <option value="3">Selecione</option>
                </select>
                <select>
                    <option value="none">Estilo de Jogo</option>
                    <option value="1">Selecione</option>
                    <option value="2">Selecione</option>
                    <option value="3">Selecione</option>
                </select>
                <select>
                    <option value="none">Complexidade</option>
                    <option value="1">Selecione</option>
                    <option value="2">Selecione</option>
                    <option value="3">Selecione</option>
                </select>

                <Random />
            </section>

            <aside>

            </aside>

            <main className="w-full h-screen">
                <Card/>
            </main>

        </div>
    )
}