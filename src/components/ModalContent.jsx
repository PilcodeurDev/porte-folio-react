/**
 * The external imports
 */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaRegUser, FaRegFileAlt } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

/**
 * The internal imports
 */

export default function ModalContent({ closeModal, title, modalText, image }) {
  return (
    <>
      <div
        onClick={closeModal}
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-10"
      ></div>
      <div
        className="fixed bg-slate-200 rounded-xl shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-7
      "
      >
        <h3 className="flex justify-center items-center pb-10">{title}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex mb-3 items-center">
            <FaRegUser className="mr-2" />
            <p className="text-sm font-semibold">
              <span>Client : </span>
              <span>{modalText.p1}</span>
            </p>
          </div>
          <div className="flex mb-3 items-center">
            <FaRegFileAlt className="mr-2" />
            <p className="text-sm font-semibold">
              <span>Projet : </span>
              <span>{modalText.p2}</span>
            </p>
          </div>
          <div className="flex mb-3 items-center">
            <LuExternalLink className="mr-2" />
            <p className="text-sm font-semibold">
              <span>Lien : </span>
              <span>{modalText.p3}</span>
            </p>
          </div>
          <div className="flex mb-3 items-center">
            <FaCode className="mr-2" />
            <p className="text-sm font-semibold">
              <span>Technologies : </span>
              <span>{modalText.p4}</span>
            </p>
          </div>
        </div>
        <button>
          <IoMdCloseCircleOutline
            className="absolute -top-14 -right-14 text-6xl text-gray-100 cursor-pointer duration-300 hover:text-mainColor"
            onClick={closeModal}
          />
        </button>
        <div className="w-[100%]">{image}</div>
      </div>
    </>
  );
}
