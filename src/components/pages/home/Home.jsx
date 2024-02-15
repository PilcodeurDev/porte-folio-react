/**
 * The external imports
 */
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Canvas } from "@react-three/fiber";

/**
 * The internal imports
 */
import "./Home.css";
import Button from "../../button/Button";
import { DataContext } from "../../../context/DataProvider";
import OverlayRevealContent from "../../animation/OverlayRevealContent";
import Profil3D from "../../animation/Profil3D";

export default function Home() {
  const { owner } = useContext(DataContext);
  const [isBelowLG, setIsBelowLG] = useState(true);

  const BUTTON_TEXT = "À propos de moi";
  const BUTTON_HREF = "/about";
  const BUTTON_ICON = <FaArrowRightLong />;

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      setIsBelowLG(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="relative m-auto h-full flex flex-col gap-14 items-center overflow-hidden lg:flex-row"
    >
      <div className="fixed h-[200%] w-[100%] -rotate-[15deg] bg-mainColorContrast -top-[50%] -left-[83%] hidden lg:block"></div>
      {isBelowLG ? (
        <div
          className="profil w-60 h-60 md:w-72 md:h-72 mt-14 border-mainColor rounded-full border-4
      lg:w-[30%] lg:h-[70%] lg:fixed lg:mt-0 lg:top-[15%] lg:left-10 lg:rounded-[30px] lg:border-none
      xl:top-[4%] xl:left-14 xl:h-[92%]"
        ></div>
      ) : (
        <Canvas
          camera={{ position: [0, 0, 4.6], fov: 42 }}
          style={{
            height: "92vh",
            width: "40%",
            position: "fixed",
            top: "4%",
            left: "2.5%",
          }}
        >
          <Profil3D />
        </Canvas>
      )}
      <div className="flex flex-col items-center w-full lg:w-2/3 lg:ml-[40%]">
        <div className="relative flex flex-col items-center justify-center  w-2/3 -top-5 lg:pr-5">
          <div className="flex justify-center pr-4 lg:block lg:pr-0  ">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-6xl pl-12">
              <span className="relative flex text-mainColorContrast before:absolute  before:h-1 before:rounded-full before:bg-mainColorContrast before:-left-12 before:top-[13px] before:w-6 sm:before:w-7 md:before:w-8 lg:before:top-5 lg:before:-left-14 lg:before:w-10 lg:before:h-2">
                Je m'appelle
              </span>
              <span className="flex text-mainColorContrast">
                {owner.firstname} {owner.lastname}.
              </span>
              <span className="flex">Concepteur de</span>
              <span className="flex">sites web</span>
            </h1>
          </div>
          <p className=" my-5 text-md lg:text-xl lg:w-[80%]">
            Je suis concepteur web ainsi que développeur front-end basé à la
            frontière franco-suisse. Je suis passionné par la création
            d'interfaces utilisateur interactives et dynamiques qui captiveront
            vos visiteurs dès les premières secondes.
          </p>
          <Button text={BUTTON_TEXT} href={BUTTON_HREF} icon={BUTTON_ICON} />
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
