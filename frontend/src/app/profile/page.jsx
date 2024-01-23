import Breadcrumb from "@/components/Breadcrumb";
import ProfileSidebar from "@/components/ProfileSidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { fetchMyInfo } from "@/libs/data";
import AccordionTest from "@/components/Accordion";
import MenuProfile from "@/components/MenuProfile";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  // const accessToken = session?.user.token;
  // const { myInfo } = await fetchMyInfo({ accessToken });
  console.log("session 2: ", session.user.experience);

  return (
    <section>
      <Breadcrumb />
      <div className="flex">
        <ProfileSidebar {...session.user} />
        <div className="flex flex-col w-[919px] pt-0 p-5">
          <MenuProfile />
          {/* <AccordionTest title="Experiencia"> 
            {session?.user?.experience?.map((exp, index) => (
              <p>{exp}</p>
            ))} 
          </AccordionTest> */}
          <AccordionTest title="Habilidades" />
          <AccordionTest title="Educacion" />
          <AccordionTest title="Idiomas" />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
