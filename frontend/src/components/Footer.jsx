import Image from "next/image";
import logoWhite from "../../public/logo-white.png";
import flag from "../../public/flag.png";
import {
  facebookWhiteIcon,
  instagramWhiteIcon,
  linkedinWhiteIcon,
  youtubeWhiteIcon,
} from "@/assets";

const SubMenuItems = ({ title, items }) => {
  return (
    <div className="capitalize">
      <span className="text-xl font-semibold">{title}</span>
      <ul className="text-base font-normal">
        {items.map((item, idx) => (
          <li key={idx} className="my-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const IconFooter = ({ children }) => {
  return <div className="mr-4">{children}</div>;
};

const Footer = () => {
  return (
    <footer className="flex flex-col min-h-[500px] bg-purple-bg text-white">
      <div className="pt-16 pl-20 pb-12">
        <Image src={logoWhite} alt="logo" className="w-72" />
      </div>
      <div className="grid grid-cols-5 px-28 gap-4 place-items-stretch">
        <SubMenuItems
          title="Persona"
          items={["ver todas las ofertas", "Perfil", "FAQ"]}
        />
        <SubMenuItems
          title="Empresa"
          items={[
            "Selección de candidatos",
            "publicar oferta de empleo",
            "Perfil",
          ]}
        />
        <SubMenuItems
          title="Otros recursos"
          items={[
            "Centro de ayuda",
            "Comunidad",
            "Acerca de nosotros",
            "Carreras",
            "Contactanos",
          ]}
        />
        <SubMenuItems
          title="Legal"
          items={[
            "Politica de manejo de la infomación",
            "Terminos y Condiciones",
          ]}
        />
        <div className="flex flex-col">
          <div>
            <span className="text-xl font-semibold">Síguenos en:</span>
          </div>
          <div className="flex mt-6">
            <Image
              src={instagramWhiteIcon}
              alt="instagram icon"
              className="h-8 w-8 mr-4"
            />
            <Image
              src={linkedinWhiteIcon}
              alt="instagram icon"
              className="h-8 w-8 mr-4"
            />
            <Image
              src={facebookWhiteIcon}
              alt="instagram icon"
              className="h-8 w-8 mr-4"
            />
            <Image
              src={youtubeWhiteIcon}
              alt="instagram icon"
              className="h-8 w-8 mr-4"
            />{" "}
          </div>
          <div className="flex mt-8">
            <Image src={flag} alt="flag" className="w-[30px] h-[30px]" />
            <span className="text-xl font-semibold ml-4">Ploy Puerto Rico</span>
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto">
        <hr className="h-px my-6 bg-black border-0" />
      </div>
      <div className="flex w-11/12 items-center justify-end">
        <ul className="flex mb-6">
          <li className="mx-3">Accesibilidad</li>
          <li className="mx-3">Politica de cookies</li>
          <li className="mx-3">Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
