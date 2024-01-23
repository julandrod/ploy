"use client";

import Image from "next/image";
import blankProfilePic from "../../public/blank-profile-pic.png";
import {
  editIcon,
  facebookIcon,
  instagramIcon,
  linkedinIcon,
  youtubeIcon,
} from "@/assets";
import formatDate from "@/libs/formatDate";
import Modal from "./Modal";
import { useState } from "react";
import EditProfile from "./EditProfile";

const TitleSection = ({ title, fontSize, handleEdit }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className={`text-${fontSize} font-semibold capitalize`}>{title}</h1>
      <button onClick={handleEdit}>
        <Image src={editIcon} alt="edit icon" className="w-5 h-5" />
      </button>
    </div>
  );
};

const SocialLink = ({ icon, title }) => {
  return (
    <div className="flex items-center my-2">
      <Image src={icon} alt={`${title} logo`} className="w-8 h-8" />
      <span className="ml-5">{title}</span>
    </div>
  );
};

const ProfileSidebar = ({
  firstName,
  lastName,
  email,
  birthdate,
  phone,
  location,
  identification,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="relative flex  flex-col bg-white w-[396px] rounded-md">
        <div className="absolute inset-0 z-0 bg-gradient-radial h-40 w-full opacity-10"></div>
        <div className="pl-24 pr-9 pt-9">
          <TitleSection title="Perfil" fontSize="2xl" />
        </div>
        <div className="flex flex-col pl-12 items-center justify-center my-16">
          <Image
            src={blankProfilePic}
            alt="imagen perfil"
            className="w-48 h-48 rounded-[81.5px] border-main-purple border-4"
          />
          <span className="text-2xl font-semibold mt-7">{`${firstName} ${lastName}`}</span>
        </div>
        <div className="flex flex-col pl-24 pr-9">
          <TitleSection
            title="Datos personales"
            fontSize="xl"
            handleEdit={() => setShowModal(true)}
          />
          <hr className="bg-black border my-2" />
          <div className="flex flex-col my-2 m-auto items-start justify-center text-base font-normal">
            <span className="my-2">Fecha de nacimiento</span>
            <span className="font-bold">{formatDate(birthdate)}</span>
            <span className="my-2">Correo</span>
            <span className="font-bold">{email}</span>
            <span className="my-2">Telefono</span>
            <span className="font-bold">{phone}</span>
            <span className="my-2">Ubicación</span>
            <span className="font-bold">{location}</span>
            <span className="my-2">Identificación (ID)</span>
            <span className="font-bold">{identification}</span>
          </div>
        </div>
        <div className="flex flex-col pl-24 pr-9 my-8">
          <TitleSection title="Redes y enlaces" fontSize="xl" />
          <hr className="bg-black border my-2" />
          <div className="flex flex-col my-2 ml-1 items-start justify-center text-base font-normal">
            <SocialLink title="Instagram" icon={instagramIcon} />
            <SocialLink title="Linkedin" icon={linkedinIcon} />
            <SocialLink title="Facebook" icon={facebookIcon} />
            <SocialLink title="YouTube" icon={youtubeIcon} />
            <span className="my-2 ml-[52px]">Otros</span>
          </div>
        </div>
        <div className="flex flex-col pl-24 pr-9 my-8">
          <TitleSection title="Hobbies" fontSize="xl" />
          <hr className="bg-black border my-2" />
          <div className="flex flex-wrap gap-4">
            <span>Cantar</span>
            <span>Bailar</span>
            <span>Correr</span>
          </div>
        </div>
      </div>
      <Modal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
        title="Datos personales"
      >
        <EditProfile
          firstName={firstName}
          lastName={lastName}
          birthdate={formatDate(birthdate)}
          email={email}
          phone={phone}
          location={location}
          identification={identification}
        />
      </Modal>
    </>
  );
};

export default ProfileSidebar;
