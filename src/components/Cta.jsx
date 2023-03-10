import React from 'react'

import { FaWhatsapp } from "react-icons/fa";

const Cta = () => {
  return (
    <div id="cta" className="flex justify-center p-5">
      <div className="flex flex-col w-full md:w-3/6 items-center shadow-2xl shadow-gray-500/50 bg-gradient-to-r from-[#F2B467] to-[#976B34] rounded-xl p-5 md:p-8">
        <h2 className="text-sm md:text-xl leading-7 text-justify text-black">
          O uso da cannabis medicinal tem sido amplamente estudado e os
          resultados são surpreendentes. Em muitos casos, ela pode ser tão
          eficaz quanto os medicamentos tradicionais. Além disso, é uma opção
          mais natural e menos invasiva, o que é importante para pessoas que têm
          medo dos efeitos colaterais dos remédios.
        </h2>

        <button className="p-3 md:p-5 w-80 my-5 text-white rounded-2xl transform duration-500 hover:-translate-y-1 bg-[#254133] hover:bg-[#254133]/90">
          <a
            href="https://wa.me/5596991354590"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex justify-center items-center gap-3 md:gap-5">
              <FaWhatsapp size={30} />
              <h2 className="text-sm md:text-xl">Agende sua consulta</h2>
            </div>
          </a>
        </button>
      </div>
    </div>
  )
}

export default Cta