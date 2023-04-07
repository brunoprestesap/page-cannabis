import React from "react";

import { GiSmartphone } from "react-icons/gi";
import { FaRegListAlt } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";
import { BsBagCheck, BsArrowRightCircle } from "react-icons/bs";
import { RiMedicineBottleLine } from "react-icons/ri";
import CardProcessoTratamento from "./CardProcessoTratamento";

const ComecarTratamento = () => {
  const contents = [
    {
      id: 1,
      icon: <GiSmartphone size={50} color="254133" />,
      title: "Marque sua consulta",
      text: "A consulta online é o grande aliado do processo",
    },
    {
      id: 2,
      icon: <FaRegListAlt size={50} color="254133" />,
      title: "Receba sua receita digital",
      text: "Enviamos sua receita por e-mail ou whatsapp",
    },
    {
      id: 3,
      icon: <TbChecklist size={50} color="254133" />,
      title: "Realize autorização na ANVISA",
      text: "Te ajudamos no processo burocrático sem custo adicional",
    },
    {
      id: 4,
      icon: <BsBagCheck size={50} color="254133" />,
      title: "Compre seu produto",
      text: "O produto é entregue diretamente na sua casa",
    },
    {
      id: 5,
      icon: <RiMedicineBottleLine size={50} color="254133" />,
      title: "Inicie seu tratamento",
      text: "Estaremos aqui pra te acompanhar nessa jornada",
    },
  ];

  return (
    <div
      id="tratamentos"
      className="md:h-[500px] p-5 flex flex-col justify-center bg-[#CEBDA9]"
    >
      <div className="mb-10">
        <h2 className="text-4xl text-[#BF8B01] font-bold text-center uppercase">
          Como começar
        </h2>
        <h2 className="text-4xl font-bold text-[#254133] text-center uppercase underline decoration-[#7C5A12] underline-offset-8">
          seu tratamento
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5">
        {contents.map((content) => {
          return (
            <div className="w-full flex flex-col md:flex-row items-center justify-center lg:m-5" key={content.id}>
              <div
                className="flex justify-center items-center"
              >
                <CardProcessoTratamento
                  id={content.id}
                  icon={content.icon}
                  title={content.title}
                  text={content.text}
                />
              </div>
              {content.id < 5 ? <div id="seta" className="invisible md:visible lg:m-5"> <BsArrowRightCircle size={25} color="254133" /></div> : null }
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComecarTratamento;
