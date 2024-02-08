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
  const btnText = "A propos de moi";
  const btnIcon = <FaArrowRightLong />;
  const btnHref = "/about";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1200"
      className="m-auto h-full flex flex-col gap-20 items-center relative lg:flex-row"
    >
      <div
        className="profil w-60 h-60 md:w-80 md:h-80 mt-[15%] border-[#183966] rounded-full border-4
      lg:w-[30%] lg:h-[70%] lg:fixed lg:mt-0 lg:top-[15%] lg:left-10 lg:rounded-[30px] lg:border-none
      xl:top-[4%] xl:left-14 xl:h-[92%]"
      ></div>
      <div className=" w-full flex justify-center lg:w-2/3 lg:ml-[40%]">
        <div className="relative w-2/3 -top-5 pr-5">
          <div className="flex justify-center scale-75 sm:scale-[80%] md:scale-100 lg:block">
            <h1 className="pl-12">
              <font className="relative flex text-[#BBA06B] before:absolute before:-left-14 before:top-6 before:w-8 before:h-1 before:rounded-full before:bg-[#bba06b]">
                je m'appelle
              </font>
              <font className=" flex text-[#BBA06B]">
                {owner.firstname} {owner.lastname} .
              </font>
              <font className=" flex ">concepteur de</font>
              <font className=" flex ">sites web</font>
            </h1>
          </div>
          <p className="lg:w-[80%] text-xl my-5">
            Je suis concepteur Web ainsi que développeur front-end basé à la
            frontière Franco-Suisse. Je suis passionné par la création
            d'interface utilisateur interactive et dynamique qui captivera vos
            visiteurs dès les premières secondes.
          </p>
          <Button text={btnText} href={btnHref} icon={btnIcon} />
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
