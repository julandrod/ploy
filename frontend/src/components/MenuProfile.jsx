import React from "react";

const MenuItem = ({ item }) => {
  return <li className="capitalize w-24 text-base font-bold mx-4 text-center hover:text-main-purple cursor-pointer" >{item}</li>;
};

const MenuProfile = () => {
  return (
    <div className="h-20 bg-white flex items-center justify-around py-4 px-6 rounded-md ">
      <ul className="flex items-center justify-around">
        <MenuItem item="acerca de" />
        <MenuItem item="experiencia" />
        <MenuItem item="habilidades" />
        <MenuItem item="educacion" />
        <MenuItem item="idiomas" />
        <MenuItem item="documentos adicionales" />
        <MenuItem item="resume" />
      </ul>
    </div>
  );
};

export default MenuProfile;
