import Image from "next/image";
import logoPurple from "../../public/logo-purple.png"
import Link from "next/link";

const SingleNavbar = () => {
  return (
    <nav className="flex flex-col h-56 bg-white">
      <div className="pt-9 px-24">
        <button className="h-12 w-32 bg-main-purple text-white font-semibold rounded-md">Busco Empleo</button>
        <button className="h-12 w-32 bg-main-purple-light rounded-md">Soy Empresa</button>
      </div>
      <div className="flex pt-9 px-24 justify-between items-center">
        <div>
            <Image src={logoPurple} alt="logo" className="w-48 h-11"/>
        </div>
        <div className="flex text-xl">
          <Link href="/login" className="bg-white flex items-center justify-center border-2 border-main-purple text-main-purple font-semibold w-52 h-10 rounded-lg mr-6 ">Inicar Sesión</Link>
          <button className="bg-main-purple text-white w-52 h-10 rounded-lg">Crear Cuenta</button>
        </div>          
      </div>
    </nav>
  );
};

export default SingleNavbar;
