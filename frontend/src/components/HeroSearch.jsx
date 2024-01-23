import React from "react";
import SearchInput from "./SearchInput";

const HeroSearch = () => {
  return (
    <div className="relative text-white bg-hero-search-pattern bg-cover bg-center h-[500px] flex flex-col items-center justify-around py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-black opacity-90 z-0"></div>
      <h1 className="text-5xl capitalize z-10">Empleos en las mejores empresas del mercado</h1>
      <p className="text-xl capitalize z-10">
        Explora qué empleos ofrecen la mayor satisfacción laboral, los mejores
        sueldos y más
      </p>
      <div className="w-[897px] z-10">
        <SearchInput width="[897px]" />
      </div>
      <div className="flex z-10">
        {/* replace for dropdown menus */}
        <input
          type="text"
          placeholder="tipo de contrato"
          className="capitalize placeholder:text-black h-10 mx-4 rounded-lg px-2"
        />
        <input
          type="text"
          placeholder="Fecha de publicación"
          className="capitalize placeholder:text-black h-10 mx-4 rounded-lg px-2"
        />
        <input
          type="text"
          placeholder="Ubicación"
          className="capitalize placeholder:text-black h-10 mx-4 rounded-lg px-2"
        />
        <input
          type="text"
          placeholder="Experiencia"
          className="capitalize placeholder:text-black h-10 mx-4 rounded-lg px-2"
        />
      </div>
    </div>
  );
};

export default HeroSearch;
