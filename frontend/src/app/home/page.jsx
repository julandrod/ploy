import HeroSearch from "@/components/HeroSearch";
import Image from "next/image";
import homeTemp from "../../../public/image-home-temp.png";
import Layout from "@/components/Layout";

const HomePage = () => {
  return (
    <Layout showSingleNavbar showFooter>
      <main className="min-h-screen">
        <HeroSearch />
        <div className="flex flex-col bg-white-pattern items-center justify-around">
          <p className="text-5xl text-text-blue w-[741px] leading-[49px] text-center py-28">
            Crea tu perfil en pocos minutos y comienza a buscar empleo
          </p>
          <Image
            src={homeTemp}
            alt="home page"
            className="w-[830px] h-[521px] mb-28"
          />
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
