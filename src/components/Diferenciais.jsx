import React from "react";

import CardBeneficio from "./CardBeneficio";
import { FaHandHoldingHeart, FaClock, FaUserMd } from "react-icons/fa";

import { MdOutlineFollowTheSigns } from "react-icons/md";

const Diferenciais = () => {
  const contents = [
    {
      icon: <FaUserMd size={50} color="CDBCA8" />,
      title: "Telemedicina",
      text: "Graças ao avanço das tecnologias, a telemedicina ajuda milhares de pessoas a buscar tratamento para os diversos tipos de transtornos. É possível atender pessoas que residem em outros estados e em outros países, devido a facilidade dos encontros por meio das vídeochamadas e também pela possibilidade do envio de receitas digitais. A sensação é de estar presente junto ao médico, como numa consulta presencial.",
    },
    {
      icon: <FaClock size={50} color="CDBCA8" />,
      title: "Hora Marcada",
      text: "As consultas são realizadas por hora marcada, seja na modalidade de atendimento presencial ou por telemedicina. Em cada encontro, a pessoa tem seu espaço garantido para relatar suas dificuldades, sofrimento e angústias, respeitando seu sigilo.",
    },
    {
      icon: <FaHandHoldingHeart size={50} color="CDBCA8" />,
      title: "Atendimento humanizado",
      text: "Fazemos questão de uma escuta atenta e humanizada. Prezamos pelo cuidado e humanização nos atendimentos por meio de um atendimento acolhedor. Atuamos com base na ética, empatia e respeito pela vida, com objetivo de melhorar cada vez mais sua qualidade de vida.",
    },
    {
      icon: <MdOutlineFollowTheSigns size={50} color="CDBCA8" />,
      title: "Acompanhamento",
      text: "Receba um acompanhamento médico adequado e seguro em toda a sua jornada, avaliando todo o seu progresso durante o tratamento. Queremos facilitar todo o seu processo, a partir da consulta individualizada com uma Psiquiatra Especialista, emissão de receita digital, apoio no processo de autorização pela ANVISA e na compra do seu medicamento.",
    },
  ];

  return (
    <div id="diferenciais" className="px-5 py-16 bg-[#254133]">
      <div className="flex w-full justify-center items-center gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white uppercase">
          Nossos
        </h2>
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase underline decoration-[#F2B467] text-[#BF8B01] underline-offset-8">
          diferenciais
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-5">
        {contents.map((content, idx) => {
          return (
            <CardBeneficio
              key={idx}
              icon={content.icon}
              title={content.title}
              text={content.text}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Diferenciais;
