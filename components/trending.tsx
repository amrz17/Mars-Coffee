import { americano, capuccino, espreso } from "@/public/images";
import Image from "next/image";
import React from "react";

const Trending = () => {
  return (
    <section
      className="flex flex-col justify-center items-center w-full 
      xl:h-[600px] font-poppins my-10"
    >
      <div className="w-[90%] xl:w-[1160px] xl:h-[416px]">
        <h1 className="font-semibold p-4 text-xl xl:text-2xl text-center xl:text-start">
          Trending
        </h1>
        <div className="flex flex-col xl:flex-row justify-center items-center gap-6 p-4">
          <div className="max-w-[360px]">
            <Image
              src={espreso}
              alt="Espresso"
              className="max-h-[240px] mx-auto mb-2"
            />
            <div>
              <h2 className="font-medium text-sm text-espreso">
                Espresso{" "}
                <span className="text-neutral-400 ml-2">RP. 20000</span>
              </h2>
              <p className="mt-2">
                Coffee produced from a coffee brewing process using high
                pressure and temperature
              </p>
            </div>
          </div>
          <div className="max-w-[360px]">
            <Image
              src={capuccino}
              alt="capuccino"
              className="max-h-[240px] mx-auto mb-2"
            />
            <div>
              <h2 className="font-medium text-sm text-capucino">
                Capuccino
                <span className="text-neutral-400 ml-2">RP. 22000</span>
              </h2>
              <p className="mt-2">
                Coffee produced from a coffee brewing process using high
                pressure and temperature
              </p>
            </div>
          </div>
          <div className="max-w-[360px]">
            <Image
              src={americano}
              alt="americano"
              className="max-h-[240px] mx-auto mb-2"
            />
            <div>
              <h2 className="font-medium text-sm text-americano">
                Americano
                <span className="text-neutral-400 ml-2">RP. 18000</span>
              </h2>
              <p className="mt-2">
                Coffee produced from a coffee brewing process using high
                pressure and temperature
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
