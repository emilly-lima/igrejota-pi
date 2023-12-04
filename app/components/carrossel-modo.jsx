import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useModo } from "../store/modo";

export default function CarouselModo() {
  const { modo, setModo } = useModo();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(modo);
  }, [modo]);

  return (
    <Carousel
      id="car-modo" className=" w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] fixed mx-auto bottom-[37.5%] sm:bottom-[29.7%] right-[3%] sm:right-[19%] lg:right-[24%] xl:left-[26%] xl:bottom-[25%] 2xl:right-[44%] 2xl:top-[8%] "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-16 left-2/4 -translate-x-2/4 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-2 bg-zinc-800" : "w-2 bg-yellow-800"
                }`}
              onClick={() => {
                setActiveIndex(i);
                setModo(i);
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
            setModo(newIndex);
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
            const newIndex = activeIndex + 1 <= 2 ? activeIndex + 1 : 2;
            handleNext();
            setModo(newIndex);
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
        <p id="rotulo-duvida" className=" sm:my-[111px] mr-1">Modo de Jogo</p>
        <Image
          src="/assets/modo-duvida.svg"
          alt="modo-de-jogo-indefinido"
          width={470}
          height={470}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />
    </div>
    <div>
        <p id="rotulo" className="sm:my-[120px]">Cooperativo</p>
      <Image
        src="/assets/coop.svg"
        alt="modo-cooperativo"
        width={427}
        height={427}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
            <p id="rotulo" className="sm:my-[120px] mr-8">Competitivo</p>
      <Image
        src="/assets/comp.svg"
        alt="modo-competitivo"
        width={500}
        height={500}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
      
    </Carousel>
  );
}