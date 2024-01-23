import Image from "next/image";
import blankProfilePic from "../../public/blank-profile-pic.png";
import { addIcon, removeIcon } from "@/assets";

const CustomInput = ({ text, placeholder }) => {
  return (
    <div className="flex items-center justify-between p-5">
      <label className="text-xl font-medium capitalize">{text}</label>
      <input
        placeholder={placeholder}
        type="text"
        className="w-4/6 bg-main-grey-dark h-10 p-2 rounded-lg focus:outline-none"
      />
    </div>
  );
};

const EditProfile = ({
  firstName,
  lastName,
  birthdate,
  email,
  phone,
  location,
  identification,
}) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-1/4 ">
        <Image
          src={blankProfilePic}
          alt="imagen perfil"
          className="w-48 h-48 rounded-[81.5px] border-main-purple border-4"
        />
        <button className="bg-main-purple text-white py-2 px-5 rounded-2xl my-9 text-xl font-medium capitalize">
          Agregar foto
        </button>
        <button>
          <Image src={removeIcon} />
        </button>
      </div>
      <div className="flex flex-col w-3/4">
        <div className="bg-main-grey-light py-3 px-4 rounded-2xl">
          <CustomInput text="Nombre" placeholder={firstName} />
          <CustomInput text="Apellido" placeholder={lastName} />
          <CustomInput text="Fecha de nacimiento" placeholder={birthdate} />
          <CustomInput text="Correo" placeholder={email} />
          <CustomInput text="Telefono" placeholder={phone} />
          <CustomInput text="Ubicacion" placeholder={location} />
          <CustomInput
            text="Identificacion (ID)"
            placeholder={identification}
          />
        </div>
        <div className="bg-main-grey-light py-3 px-4 my-4 rounded-2xl">
          <div className="flex items-center justify-between p-5">
            <span className="text-xl font-medium capitalize">
              redes y enlaces
            </span>
            <button>
              <Image src={addIcon} />
            </button>
          </div>
        </div>
        <div className="bg-main-grey-light py-3 px-4 my-4 rounded-2xl">
          <div className="flex items-center justify-between p-5">
            <span className="text-xl font-medium capitalize">hobbies</span>
            <button>
              <Image src={addIcon} />
            </button>
          </div>
        </div>
        <div className="py-1  my-4 rounded-2xl">
          <div className="flex justify-end">
            <button className="bg-white border-main-purple border-2 text-black w-40 py-2 px-5 rounded-2xl mx-6 my-9 text-xl font-medium capitalize">
              Cancelar
            </button>
            <button className="bg-main-purple text-white w-40 py-2 px-5 rounded-2xl my-9 text-xl font-medium capitalize">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
