import React from "react";

import bgHero from "../assets/bg.webp";
import CardExperience from "./CardExperience";

const Hero = () => {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover"
        src={bgHero}
        alt="hero top"
      ></img>

      <div className="w-full h-screen absolute top-0 left-0 md:bottom-4 bg-white/10">
        <div className="invisible md:visible absolute top-0 right-0 max-w-[700px] w-52 lg:w-72 m-auto h-full">
          <CardExperience />
        </div>

        <div
          id="sobre"
          className="flex absolute bottom-16 md:bottom-24 left-0 md:left-7 m-5 md:m-0"
        >
          <div className="backdrop-opacity-10 rounded-2xl bg-white/50 p-5 bg-opacity-60 shadow-2xl shadow-stone-500/50">
            <h1 className="text-6xl uppercase lg:text-6xl text-[#BF8B01] font-bold">
              Dra.
            </h1>
            <h1 className="text-6xl uppercase lg:text-6xl font-bold">
              Camila
              <br />
              Neiva
            </h1>

            <hr className="w-full border-1 mt-3 mb-5 border-[#7C5A12]" />

            <div className="my-10">
              <h2 className="text-2xl md:text-4xl font-medium">
                Prescritora de Cannabis Medicinal
              </h2>
              <h2 className="text-lg md:text-xl">
                Atendimento particular por telemedicina
              </h2>
            </div>

            <div className="w-full flex justify-center">
              <a
                href="https://wa.me/5596991354590"
                target="_blank"
                rel="noreferrer"
              >
                <button className="bg-[#254133] rounded-lg w-full py-5 px-8 text-center hover:border hover:border-stone-100 hover:shadow-xl">
                  <h2 className="text-white uppercase font-bold">
                    Agende sua consulta
                  </h2>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
