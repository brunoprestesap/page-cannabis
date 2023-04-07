import React from "react";
import Brand from "../components/Brand";
import BtnUp from "../components/BtnUp";
import CardInicial from "../components/CardInicial";
import ComecarTratamento from "../components/ComecarTratamento";
import Contact from "../components/Contact";
import Cta from "../components/Cta";
import Diferenciais from "../components/Diferenciais";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Testemonials from "../components/Testemonials";
import Tratamentos from "../components/Tratamentos";

const Home = () => {
  const colors = [
    "#003E53",
    "#A1412B",
    "#DF854F",
    "#F1EDDB",
    "#244B5A",
    "#53575A",
  ];

  const currentColor = colors[0];
  const currentMode = "white";

  return (
    <div className={currentMode === "dark" ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-main-dark-bg dark:text-black">
        {/* BtnArrowUp Component */}
        <BtnUp color={currentColor} />

        <div className="transform mx-auto duration-500">
          {/* Hero area */}
          <Hero color={currentColor} />

          {/* Card inicial area */}
          <Tratamentos />

          <ComecarTratamento />

          {/* Diferentials area */}
          <Diferenciais />

          {/* Card inicial area */}
          <CardInicial />

          {/* Card inicial area */}
          <Brand />

          {/* Testemonials area */}
          <Testemonials />

          {/* Cta area */}
          <Cta />

          {/* Contact area */}
          <Contact />

          {/* Footer area */}
          <Footer />

        </div>
      </div>
    </div>
  );
};

export default Home;
