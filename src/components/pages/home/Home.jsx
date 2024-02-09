/**
 * The external imports
 */
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * The internal imports
 */
import "./Home.css";
import Button from "../../button/Button";
import { DataContext } from "../../../context/DataProvider";
import OverlayRevealContent from "../../animation/OverlayRevealContent";

export default function Home() {
  const { owner } = useContext(DataContext);

  const BUTTON_TEXT = "À propos de moi";
  const BUTTON_HREF = "/about";
  const BUTTON_ICON = <FaArrowRightLong />;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative m-auto h-full flex flex-col gap-20 items-center overflow-hidden lg:flex-row"
    >
      <div className="fixed h-[200%] w-[100%] -rotate-[15deg] bg-mainColorContrast -top-[50%] -left-[83%] lg:block "></div>
      <div
        className="profil w-60 h-60 md:w-80 md:h-80 mt-[15%] border-mainColor rounded-full border-4
      lg:w-[30%] lg:h-[70%] lg:fixed lg:mt-0 lg:top-[15%] lg:left-10 lg:rounded-[30px] lg:border-none
      xl:top-[4%] xl:left-14 xl:h-[92%]"
      ></div>
      <div className=" w-full flex justify-center lg:w-2/3 lg:ml-[40%]">
        <div className="relative w-2/3 -top-5 pr-5">
          <div className="flex justify-center scale-75 sm:scale-[80%] md:scale-100 lg:block">
            <h1 className="pl-12">
              <span className="relative flex text-mainColorContrast before:absolute before:-left-14 before:top-6 before:w-8 before:h-1 before:rounded-full before:bg-mainColorContrast">
                Je m'appelle
              </span>
              <span className="flex text-mainColorContrast">
                {owner.firstname} {owner.lastname}.
              </span>
              <span className="flex">Concepteur de</span>
              <span className="flex">sites web</span>
            </h1>
          </div>
          <p className="lg:w-[80%] text-xl my-5">
            Je suis concepteur web ainsi que développeur front-end basé à la
            frontière franco-suisse. Je suis passionné par la création
            d'interfaces utilisateur interactives et dynamiques qui captiveront
            vos visiteurs dès les premières secondes.
          </p>
          <Button
            text={BUTTON_TEXT}
            href={BUTTON_HREF}
            icon={BUTTON_ICON}
          />
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
