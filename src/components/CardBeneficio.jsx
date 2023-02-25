import React from 'react'

const CardBeneficio = ({ id, icon, title, text }) => {
  return (
    <div
      key={id}
      className="mx-auto group shadow-2xl rounded-b-2xl transform duration-500 hover:-translate-y-2 bg-gradient-to-r from-[#254133] to-[#326149]"
    >
      <div className="p-5">
        <div className="flex justify-center">
          {icon}
        </div>
        <div className='w-full py-5'>
          <h5 className="text-2xl font-bold text-center text-[#BF8B01] tracking-tight">{title}</h5>
          <p className='text-base mt-3 md:leading-7 text-stone-200 text-justify'>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default CardBeneficio