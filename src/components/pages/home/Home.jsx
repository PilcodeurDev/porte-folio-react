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
import Experience from "../../animation/Experience";

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
      className="relative m-auto h-full flex flex-col gap-14 items-center overflow-hidden lg:flex-row"
    >
      <div className="fixed h-[200%] w-[100%] -rotate-[15deg] bg-mainColorContrast -top-[50%] -left-[83%] hidden lg:block"></div>
      <Experience animatedElement={"profil"} />
      <div className="flex flex-col items-center w-full lg:w-2/4 lg:ml-[40%]">
        <div className="relative flex flex-col items-center justify-center h-[600px] w-4/5 -top-5">
          <Experience animatedElement={"title"} />
          <p className="my-5 text-md lg:text-xl lg:w-[80%]">
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
