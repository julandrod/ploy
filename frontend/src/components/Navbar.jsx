import Link from "next/link";
import logoPurple from "../../public/logo-purple.png";
import blankProfilePic from "../../public/blank-profile-pic.png";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { fetchMyInfo } from "@/libs/data";

const MenuItem = ({ title }) => {
  return (
    <li className="h-9 px-3 py-1 text-base m-4 font-semibold hover:animate-pulse hover:text-main-purple">
      {title}
    </li>
  );
};

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  // const accessToken = session?.user.token;
  // const {
  //   myInfo: { firstName, lastName, profilePicture },
  // } = await fetchMyInfo({ accessToken });
  const {firstName, lastName} = session.user;

  console.log("hola: ",session)

  return (
    <nav className="flex flex-col w-full font-bold">
      <div className="bg-white flex h-28 items-center justify-around">
        <div>
          <Link href="/">
            <Image className="w-44 h-10" src={logoPurple} alt="" />
          </Link>
        </div>
        <SearchInput width="96" />
        <div className="flex gap-x-3 justify-end">
          <Image className="w-11 h-11 rounded-full border-main-purple border-2" src={blankProfilePic} alt="" />
          <div className="flex flex-col justify-center">
            <span className="text-navbar-username text-xs font-medium">
            {`${firstName} ${lastName}`}
            </span>
            <span className="text-navbar-user-views text-xs font-normal">
              367 views today
            </span>
          </div>
        </div>
      </div>
      <div className="bg-grey-2 flex w-full justify-around">
        <ul className="flex h-16 items-center justify-center gap-x-2">
          <MenuItem title="Empleos" />
          <MenuItem title="Sugeridos" />
          <MenuItem title="Guardados" />
          <MenuItem title="Estatus Del Proceso" />
          <MenuItem title="Resume" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
