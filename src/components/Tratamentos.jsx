import React from "react";

import {
  FaCannabis,
  FaFrownOpen,
  FaMehRollingEyes,
  FaSadTear,
} from "react-icons/fa";

import {GiBackPain} from 'react-icons/gi'

import CardTratamento from "./CardTratamento";

const Tratamentos = () => {
  const contents = [
    {
      id: 1,
      icon: <FaFrownOpen size={50} color="254133" />,
      title: "Ansiedade",
      text: "Estudos indicam que o CBD é extremamente eficaz na redução de sintomas ansiosos em homens e mulheres. É importante considerar que toda a indicação de tratamento deve ser individual e discutida com seu Psiquiatra.",
    },
    {
      id: 2,
      icon: <FaMehRollingEyes size={50} color="254133" />,
      title: "Insônia",
      text: "O CBN ajuda a promover um sono mais regular e de qualidade a partir da sua ação no ritmo circadiano do corpo. Evidências mostram que as propriedades ansiolíticas e relaxantes do CBD são capazes de reduzir os fatores que contribuem para insônia, como o estresse e ansiedade.",
    },
    {
      id: 3,
      icon: <FaSadTear size={50} color="254133" />,
      title: "Depressão",
      text: "O CBD atua no sistema endocanabinoide do corpo, gerando assim, efeitos positivos no controle do humor, das emoções e do estresse. Por isso é considerado um grande aliado no tratamento medicamentoso.",
    },
    {
      id: 4,
      icon: <GiBackPain size={50} color="254133" />,
      title: "Dor Crônica",
      text: "O CBG interage com os receptores de dor de todo nosso corpo, por isso é uma boa opção no tratamento das patologias que causam dor crônica, como nas doenças reumatológicas, fibromialgia, artrite e neuropatia diabética.",
    },
  ];

  return (
    <div
      id="tratamentos"
      className="flex flex-col justify-center p-5 bg-white lg:h-[600px]"
    >
      <div className="mb-10">
        <h2 className="text-4xl text-[#BF8B01] font-bold text-center uppercase">
          Em que posso
        </h2>
        <h2 className="text-4xl font-bold text-[#254133] text-center uppercase underline decoration-[#7C5A12] underline-offset-8">
          te ajudar
        </h2>
      </div>
      <div className="w-full flex justify-items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {contents.map((content) => {
            return (
              <CardTratamento
                key={content.id}
                icon={content.icon}
                title={content.title}
                text={content.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tratamentos;
