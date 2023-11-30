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
      className="w-[200px] h-[200px] mx-5"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
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
          className="!absolute top-2/4 left-0 -translate-y-2/4"
        >
          <img
            src="/assets/PNGS/SETA-left.png"
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
            setTime(newIndex);
            setIndex(newIndex);
          }}
          className="!absolute top-2/4 !right-0 -translate-y-2/4"
        >
          <img
            src="/assets/PNGS/SETA-right.png"
            stroke="currentColor"
            className="w-full"
          >

          </img>
        </IconButton>
      )}
    >
        <Image
          src="/assets/PNGS/TABULEIRODUVIDA1.png"
          alt="image 1"
          width={80}
          height={100}
          loading="lazy"
          className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 0 ? "opacity-0" : "opacity-100"}`} 
        />

      <Image
        src="/assets/PNGS/TABULEIROCARTAS.png"
        alt="image 2"
        width={80}
        height={30}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 1 ? "opacity-0" : "opacity-100"}`} 
        />
      <Image
        src="/assets/PNGS/TABULEIRODADOS.png"
        alt="image 2"
        width={80}
        height={100}
        loading="lazy"
        className={`object-scale-down pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-all ${index !== 2 ? "opacity-0" : "opacity-100"}`} 
        />
      
    </Carousel>
  );
}
