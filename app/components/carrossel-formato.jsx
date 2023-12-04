import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useFormato } from "../store/formato";

export default function CarouselFormato() {
  const { formato, setFormato } = useFormato();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(formato);
  }, [formato]);

  return (
    <Carousel
      id="car-formato" className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] m-auto absolute  top-[54%] right-[26%] sm:top-[50%] lg:right-[32%] xl:right-[38%] 2xl:right-[42.5%] z-[1] object-cover"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-16 left-2/4 -translate-x-2/4 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-2 bg-zinc-800" : "w-2 bg-yellow-800"
                }`}
              onClick={() => {
                setActiveIndex(i);
                setFormato(i);
              }}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev, activeIndex }) => (
        
        <IconButton
          variant="text"
          size="lg"
          onClick={() => {
            const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
            handlePrev();
            setFormato(newIndex);
            setIndex(newIndex);
          }}
          className="!absolute top-2/4 left-0 -translate-y-2/4"
        >
          <img
            src="/assets/seta-esquerda.svg"
            stroke="currentColor"
            className="w-full"
          >

          </img>
        </IconButton>
      )}
      nextArrow={({ handleNext, activeIndex }) => (
        <IconButton
          variant="text"
          size="lg"
          onClick={() => {
            const newIndex = activeIndex + 1 <= 3 ? activeIndex + 1 : 3;
            handleNext();
            setFormato(newIndex);
            setIndex(newIndex);
          }}
          className="!absolute top-2/4 !right-0 -translate-y-2/4"
        >
          <img
            src="/assets/seta-direita.svg"
            stroke="currentColor"
            className="w-full"
          >

          </img>
        </IconButton>
      )}
    >
      <div>
        <p id="rotulo-duvida" className="my-5 sm:my-14">Formato de Jogo</p>
        <Image
          src="/assets/formato-duvida.svg"
          alt="formato-indefinido"
          width={300}
          height={300}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
      <div>
      <p id="rotulo" className="my-5 sm:my-14">Tabuleiro</p>
      <Image
        src="/assets/formato-tabuleiro.svg"
        alt="formato-tabuleiro"
        width={300}
        height={300}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5 sm:my-14">Cartas</p>
      <Image
        src="/assets/formato-cartas.svg"
        alt="formato-cartas"
        width={300}
        height={300}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
          <p id="rotulo" className="my-5 sm:my-14">Cartas e Dados</p>
        <Image
        src="/assets/formato-cartas-e-dados.svg"
        alt="formato-cartas-e-dados"
        width={300}
        height={300}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 3 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
      
    </Carousel>
  );
}
