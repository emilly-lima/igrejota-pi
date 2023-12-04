"use client"; 
import Link from "next/link"
import Navbar from "./components/navbar";
import CarouselTime from "@/app/components/carrossel-tempo";
import CarouselComplex from "@/app/components/carrossel-complex";
import CarouselFormato from "@/app/components/carrossel-formato";
import CarouselModo from "@/app/components/carrossel-modo";
import CarouselPlayer from "@/app/components/carrossel-player";

export default function Home() {
  return (
    <div className="w-full h-screen flex" id="first-page">
        <header>
          <Navbar/>
        </header>

        <main className="flex flex-row  w-screen">
        <div
          className="fixed inset-0 bg-cover bg-no-repeat bg-center z-[-10] w-screen"
          style={{
            backgroundImage: "url('/assets/mesa-movida.png')",
          }}
        />
          <CarouselTime/>
          <CarouselComplex/>
          <CarouselFormato/>
          <CarouselModo/>
          <CarouselPlayer/>
        </main>

        <footer className="flex justify-center left-[50%] right-[50%] absolute bottom-4 ">
          <Link href="/second" id="buscar-p1" className="z-[1]">
            Buscar
          </Link>
        </footer>
    </div>
  )
}
