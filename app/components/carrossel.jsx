import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function CustomCarousel() {
    return (
        <Carousel
            className="rounded-xl w-[500px] relative mx-5"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-zinc-800" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            <div
                className="h-[300px] object-cover pointer-events-none bg-blue-gray-600"
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
                src="/photo-1518623489648-a173ef7824f3.png"
                alt="image 3"
                width={500}
                height={500}
                loading="lazy"
                className="h-[300px] object-cover pointer-events-none"
            />
        </Carousel>
    );
}