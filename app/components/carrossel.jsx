import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { useGameTime } from "../store/gameTime";

export default function CustomCarousel() {
  const { time, setTime } = useGameTime();

  React.useEffect(() => {
    console.log(time);
  }, [time]);

  return (
    <Carousel
      className="rounded-xl w-[500px] relative"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute z-50 flex gap-2 bottom-4 left-2/4 -translate-x-2/4">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-zinc-800" : "w-4 bg-white/50"
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
          color="white"
          size="lg"
          onClick={() => {
            const newIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : 0;
            handlePrev();
            setTime(newIndex);
          }}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext, activeIndex }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={() => {
            const newIndex = activeIndex + 1 <= 3 ? activeIndex + 1 : 3;
            handleNext();
            setTime(newIndex);
          }}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="h-[300px] object-cover pointer-events-none bg-blue-gray-600" />

      <Image
        src="/photo-1497436072909-60f360e1d4b1.png"
        alt="image 2"
        width={500}
        height={500}
        loading="lazy"
        className="h-[300px] object-cover pointer-events-none"
      />
      <Image
        src="/photo-1497436072909-60f360e1d4b1.png"
        alt="image 2"
        width={500}
        height={500}
        loading="lazy"
        className="h-[300px] object-cover pointer-events-none"
      />
      <Image
        src="/photo-1497436072909-60f360e1d4b1.png"
        alt="image 2"
        width={500}
        height={500}
        loading="lazy"
        className="h-[300px] object-cover pointer-events-none"
      />
    </Carousel>
  );
}