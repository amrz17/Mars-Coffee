import { coffeCup, hero } from "@/public/images";
import { CircleArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="relative flex w-full h-[600px] md:h-[650px] xl:h-screen">
      <Image
        src={hero}
        alt="hero image"
        quality={100}
        fill
        style={{
          objectFit: "cover",
        }}
        className="z-0"
      />
      {/* Content */}
      <div
        className="flex items-center justify-between z-40 text-black font-poppins 
        w-full pl-4 md:px-12 xl:px-20"
      >
        <div className="flex flex-col w-full gap-4 xl:gap-6">
          <h1 className="text-6xl xl:text-8xl font-semibold">
            Here Taste <br /> The Original Coffee <br /> INDONESIA
          </h1>
          {/* Overlay */}
          <p className="text-base font-normal text-white xl:text-xl">
            Mars Coffee serves original Indonesian coffee with <br /> the best
            quality, brewed by experts chosen by <br /> coffee lovers.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="flex rounded-none w-fit font-medium p-3 xl:p-4 gap-2 
            hover:gap-4 z-20 hover:bg-coffee hover:text-white"
          >
            EXPLORE THE TASTE
            <CircleArrowRight strokeWidth={1} />
          </Button>
        </div>
        <div className="hidden md:flex hover:rotate-3 z-40 2xl:pr-20 mb-8">
          <Image
            src={coffeCup}
            alt="Coffee Cup"
            className="w-[500px] xl:w-[680px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
