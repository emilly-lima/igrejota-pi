import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useComplex } from "../store/complex";

export default function CarouselComplex() {
  const { complex, setComplex } = useComplex();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(complex);
  }, [complex]);

  return (
    <Carousel
      id="car-complex" className="w-[200px] h-[200px] mx-auto top-[calc(100vh-220px)] right-[26%]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-14 left-2/4 -translate-x-2/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-2 bg-zinc-800" : "w-2 bg-yellow-800"
                }`}
              onClick={() => {
                setActiveIndex(i);
                setComplex(i);
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
            setComplex(newIndex);
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
            setComplex(newIndex);
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
        <p id="rotulo-duvida" className="my-8">Complexidade</p>
        <Image
          src="/assets/complex-duvida.svg"
          alt="complexidade-indefinido"
          width={110}
          height={110}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
          <div>
          <p id="rotulo" className="my-8">Fácil</p>
      <Image
        src="/assets/complex-facil.svg"
        alt="complexidade-facil"
        width={110}
        height={110}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-8">Médio</p>
      <Image
        src="/assets/complex-medio.svg"
        alt="complexidade-medio"
        width={110}
        height={110}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-8">Difícil</p>
      <Image
        src="/assets/complex-dificil.svg"
        alt="complexidade-dificil"
        width={110}
        height={110}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 3 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
    </Carousel>
  );
}
