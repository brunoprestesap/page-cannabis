import React from 'react'

const CardInicial = () => {
  return (
    <div
      id="vocesabia"
      className="group p-5 bg-white lg:h-[400px] flex flex-col justify-center items-center"
    >
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#BF8B01] uppercase">
          Você
        </h2>
        <h2 className="text-3xl md:text-5xl font-bold text-center text-[#254133] uppercase underline decoration-[#7C5A12] underline-offset-8">
          sabia?
        </h2>
      </div>

      <div className='w-full lg:w-4/6 grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center py-5'>
        <div className="w-full p-5 shadow-md shadow-[#7C5A12]/50">
          <h2 className="text-justify leading-6 text-stone-900 text-sm md:text-lg font-medium">
            Existem mais de 20.000 artigos científicos sobre o uso medicinal dos
            fitocanabinoides.
            <br />
            Você não precisa esperar os sintomas piorarem para iniciar seu
            tratamento. Veja você mesmo os benefícios do uso dessa planta milenar.
          </h2>
        </div>

        <div className="w-full p-5 shadow-md shadow-[#7C5A12]/50">
          <h2 className="text-justify leading-6 text-stone-900 text-sm md:text-lg font-medium">
            É um tipo de tratamento seguro e eficaz que utiliza os compostos químicos presentes na planta para aliviar sintomas de diversas condições médicas, incluindo dor crônica, ansiedade, insônia, esclerose múltipla, entre várias outras.
          </h2>
        </div>
      </div>

    </div>
  )
}

export default CardInicial