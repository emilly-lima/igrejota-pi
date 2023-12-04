import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useGameTime } from "../store/gameTime";

export default function CarouselTime() {
  const { time, setTime } = useGameTime();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <Carousel
      id="car-tempo" className="w-[200px] h-[200px] mx-auto left-[66%] top-[70%] lg:top-[60%] 2xl:left-[57%] 2xl:top-[70%]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-[50] flex gap-2 bottom-12 left-2/4 -translate-x-2/4 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-2 bg-zinc-800" : "w-2 bg-yellow-800"
                }`}
              onClick={() => {
                setActiveIndex(i);
                setTime(i);
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
            setTime(newIndex);
            setIndex(newIndex);
          }}
          className="!absolute top-2/4 left-0 -translate-y-2/4 "
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
            const newIndex = activeIndex + 1 <= 6 ? activeIndex + 1 : 6;
            handleNext();
            setTime(newIndex);
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
        <p id="rotulo-duvida" className="my-5">Tempo de Jogo</p>
        <Image
          src="/assets/tempo-duvida.svg"
          alt="tempo-indefinido"
          width={60}
          height={60}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />
      </div>
      <div>
        <p id="rotulo" className="my-5">15 Minutos</p>
      <Image
        src="/assets/tempo-15min.svg"
        alt="tempo-15min"
        width={60}
        height={60}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5">30 Minutos</p>
      <Image
        src="/assets/tempo-30min.svg"
        alt="tempo-30min"
        width={70}
        height={70}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5">45 Minutos</p>
      <Image
        src="/assets/tempo-45min.svg"
        alt="tempo-45min"
        width={70}
        height={70}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 3 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5">1 Hora</p>
        <Image
        src="/assets/tempo-1h.svg"
        alt="tempo-1h"
        width={80}
        height={80}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 4 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5">1h e 30min </p>
        <Image
        src="/assets/tempo-1h-e-30min.svg"
        alt="tempo-1h-e-30min"
        width={80}
        height={80}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 5 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-5">2+ Horas</p>
        <Image
        src="/assets/tempo-2h+.svg"
        alt="tempo-2h+"
        width={80}
        height={80}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 6 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
    </Carousel>
  );
}
