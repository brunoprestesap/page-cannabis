import React from "react";

const CardProcessoTratamento = ({ id, icon, title, text }) => {
  return (
    <div className="w-5/6 md:w-full flex justify-center items-center group">
      <div className="w-full">
        <div className="flex flex-col justify-center items-center gap-3">
          <div>{icon}</div>
          <div>
            <h2 className="text-base md:text-xs text-center font-bold text-[#254133] uppercase">
              {title}
            </h2>
          </div>
        </div>

        <div>
          <h2 className="text-base md:text-xs text-center text-slate-900">
            {text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardProcessoTratamento;
