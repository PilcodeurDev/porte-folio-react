/**
 * The external imports
 */
import { FaArrowRightLong } from "react-icons/fa6";
import { Suspense, useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

/**
 * The internal imports
 */
import "./Home.css";
import Button from "../../button/Button";
import { DataContext } from "../../../context/DataProvider";
import OverlayRevealContent from "../../animation/OverlayRevealContent";
import TitleAnimation from "../../animation/TitleAnimation";
import ProfilAnimation from "../../animation/ProfilAnimation";

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
      <ProfilAnimation />
      <div className="flex flex-col items-center w-full lg:w-2/4 lg:ml-[40%]">
        <div className="relative flex flex-col items-center justify-center w-4/5 -top-5 h-[500px] lg:h-[600px]">
          <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl ">
            <span className="relative flex text-mainColorContrast before:absolute  before:h-1 before:rounded-full before:bg-mainColorContrast before:-left-12 before:top-[13px] before:w-6 sm:before:w-7 md:before:w-8 lg:before:top-6 lg:before:-left-14 lg:before:w-10 lg:before:h-2">
              Je m'appelle
            </span>
            <span className="flex text-mainColorContrast">
              {owner.firstname} {owner.lastname}.
            </span>
          </h1>
          <div className="min-w-[500px] w-[90%] h-1/2 rounded-3xl overflow-hidden my-8">
            <Canvas camera={{ position: [0, 0, 4], fov: 35 }}>
              <fog attach="fog" args={["#171720", 10, 20]} />
              <Suspense>
                <TitleAnimation />
              </Suspense>
              <EffectComposer>
                <Bloom mipmapBlur intensity={1.2} />
              </EffectComposer>
            </Canvas>
          </div>
          <p className="text-md lg:text-xl lg:w-[80%]">
            Je suis concepteur web ainsi que développeur front-end basé à la
            frontière franco-suisse. Je suis passionné par la création
            d'interfaces utilisateur interactives et dynamiques qui captiveront
            vos visiteurs dès les premières secondes.
          </p>
          <div>
            <Button text={BUTTON_TEXT} href={BUTTON_HREF} icon={BUTTON_ICON} />
          </div>
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
