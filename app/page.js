"use client"; 
import Link from "next/link"
import Navbar from "./components/navbar";
import CustomCarousel from "@/app/components/carrossel";

export default function Home() {
  return (
    <div>
        <header>
          <Navbar/>
        </header>

        <main className="flex justify-center my-16">
          <CustomCarousel/>
        </main>

        <footer className="flex justify-center">
          <Link href="/second" className="px-4 py-2 text-white rounded-md bg-zinc-800">
            Encontrar 
          </Link>
        </footer>
    </div>
  )
}
