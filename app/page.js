"use client"; 
import Link from "next/link"
import Navbar from "./components/navbar";
import CarouselTime from "@/app/components/carrossel-tempo";
import CarouselComplex from "@/app/components/carrossel-complex";
import CarouselFormato from "@/app/components/carrossel-formato";

export default function Home() {
  return (
    <div className="w-full h-screen flex" id="first-page">
        <header>
          <Navbar/>
        </header>

        <main className="flex flex-row fixed inset-0 bg-cover bg-no-repeat bg-center z-[-4]  w-screen"
          style={{
            backgroundImage: "url('/assets/ilustracaop1.png')",
          }}>
          <CarouselTime/>
          <CarouselComplex/>
          <CarouselFormato/>
        </main>

        <footer className="flex justify-center absolute bottom-4 left-[45%]">
          <Link href="/second" id="buscar-p1">
            Buscar
          </Link>
        </footer>
    </div>
  )
}
