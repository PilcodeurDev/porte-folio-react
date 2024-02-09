/**
 * The external imports
 */
import {
  FaMap,
  FaEnvelope,
  FaPhoneSquareAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useContext } from "react";

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import Form from "../Form";
import { DataContext } from "../../context/DataProvider";
import OverlayRevealContent from "../animation/OverlayRevealContent";

export default function Contact() {
  const { owner } = useContext(DataContext);
  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[90%] m-auto md:max-w-[60%]">
        <MyTitle span1={"prendre"} span2={"contact"} shadow={"contact"} />
        <div className="grid grid-cols-1 xl:grid-cols-5 xl:gap-9">
          <div className="col-span-2">
            <h3 className="pb-6 md:text-3xl ">Ne soyez pas timide !</h3>
            <p className="pb-6 xl:max-w-[30rem]">
              Vous avez une question ou une remarque ? Vous souhaitez en savoir
              plus sur mes prestations ? N’hésitez pas à me contacter via le
              formulaire ci-dessous.
            </p>
            <div className="flex mb-4">
              <FaMap className="text-4xl text-mainColorContrast mr-4 h-10 w-10" />
              <div>
                <p className="uppercase">Adresse Postale</p>
                <p className=" font-semibold">{owner.address}</p>
                <p className=" font-semibold">{owner.address2}</p>
              </div>
            </div>
            <div className="flex mb-4">
              <FaEnvelope className="text-4xl text-mainColorContrast mr-4 h-10 w-10" />
              <div>
                <p className="uppercase">Envoyez-moi un email</p>
                <p className=" font-semibold">{owner.email}</p>
              </div>
            </div>
            <div className="flex mb-4">
              <FaPhoneSquareAlt className="text-4xl text-mainColorContrast mr-4 h-10 w-10" />
              <div>
                <p className="uppercase">Appelez-moi</p>
                <p className=" font-semibold">{owner.phone}</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6 mb-8">
              <a
                href="https://wa.me/33614421780"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-mainColor hover:bg-mainColorContrast hover:transition-colors duration-1000"
              >
                <RiWhatsappFill className="text-3xl text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/simondespres/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-mainColor hover:bg-mainColorContrast hover:transition-colors duration-1000"
              >
                <FaLinkedinIn className="text-3xl text-white" />
              </a>
              <a
                href="https://github.com/PilcodeurDev"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-mainColor hover:bg-mainColorContrast hover:transition-colors duration-1000"
              >
                <FaGithub className="text-3xl text-white" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-mainColor hover:bg-mainColorContrast hover:transition-colors duration-1000"
              >
                <BsDiscord className="text-3xl text-white" />
              </a>
            </div>
          </div>
          <Form />
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
