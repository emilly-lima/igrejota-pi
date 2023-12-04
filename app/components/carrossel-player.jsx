import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { usePlayer } from "../store/player";

export default function CarouselPlayer() {
  const { player, setPlayer } = usePlayer();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    console.log(player);
  }, [player]);

  return (
    <Carousel
      id="car-player" className="w-[200px] h-[200px] mx-auto  ml-[5%] sm:right-[30%] sm:left-0 top-[45%] lg:top-[44%] xl:left-[-10%]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-[50] flex gap-2 bottom-12 left-2/4 -translate-x-2/4 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-full transition-all content-[''] ${activeIndex === i ? "w-2 bg-zinc-800" : "w-2 bg-yellow-800"
                }`}
              onClick={() => {
                setActiveIndex(i);
                setPlayer(i);
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
            setPlayer(newIndex);
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
            setPlayer(newIndex);
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
        <p id="rotulo-duvida" className="my-9">Número de Jogadores</p>
        <Image
          src="/assets/num-de-jog-duvida.svg"
          alt="numero-de-jogadores-indefinido"
          width={30}
          height={30}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />
      </div>
      <div>
        <p id="rotulo" className="my-7">1 Jogador</p>
      <Image
        src="/assets/1-jogador.svg"
        alt="1-jogador"
        width={30}
        height={30}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-7">2 Jogadores</p>
      <Image
        src="/assets/2-jogadores.svg"
        alt="2-jogadores"
        width={40}
        height={40}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-9">3 Jogadores</p>
      <Image
        src="/assets/3-jogadores.svg"
        alt="3-jogadores"
        width={50}
        height={50}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 3 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-9">4 Jogadores</p>
        <Image
        src="/assets/4-jogadores.svg"
        alt="4-jogadores"
        width={60}
        height={60}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 4 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-9">5 Jogadores</p>
        <Image
        src="/assets/5-jogadores.svg"
        alt="5-jogadores"
        width={60}
        height={60}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 5 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
        <div>
        <p id="rotulo" className="my-9">6+ Jogadores</p>
        <Image
        src="/assets/+6-jogadores.svg"
        alt="+6-jogadores"
        width={65}
        height={65}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 6 ? "opacity-0" : "opacity-100"}`} 
        />
        </div>
    </Carousel>
  );
}
