"use client"; 
import Link from "next/link"
import Navbar from "./components/navbar";
import CarouselTime from "@/app/components/carrossel-tempo";
import CarouselComplex from "@/app/components/carrossel-complex";
import CarouselFormato from "@/app/components/carrossel-formato";

export default function Home() {
  return (
    <div className="w-full h-screen" id="first-page">
        <header>
          <Navbar/>
        </header>

        <main className="flex justify-center my-16">
          <CarouselTime/>
          <CarouselComplex/>
          <CarouselFormato/>
        </main>

        <footer className="flex justify-center">
          <Link href="/second" className="px-4 py-2 text-white rounded-md bg-zinc-800">
            Encontrar Jogo
          </Link>
        </footer>
    </div>
  )
}
