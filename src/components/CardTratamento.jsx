import React from "react";

const CardTratamento = ({ id, icon, title, text }) => {
  return (
    <div key={id} className="group p-5 w-5/6">
      <div className="mb-5 flex flex-col lg:flex-row justify-center items-center gap-3">
        <div>{icon}</div>
        <div>
          <h2 className="text-2xl text-center font-bold text-[#BF8B01] uppercase">
            {title}
          </h2>
        </div>
      </div>

      <div>
        <h2 className="text-sm lg:text-base text-justify text-slate-900">
          {text}
        </h2>
      </div>
    </div>
  );
};

export default CardTratamento;
