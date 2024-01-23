import { closeIcon } from "@/assets";
import Image from "next/image";

const Modal = ({ isVisible, onClose, title, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-grow justify-center place-items-start overflow-x-hidden overflow-y-scroll">
      <div className="w-4/5 py-96 flex flex-col ">
        <div className="bg-white p-2 rounded-2xl">
          <div className="flex flex-col py-4 px-16">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <button onClick={() => onClose()}>
                <Image src={closeIcon} />
              </button>
            </div>
            <div>
              <hr className="bg-black border my-5" />
            </div>
          </div>
          <div className="py-2 px-16 max-h-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
