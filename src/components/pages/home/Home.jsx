/**
 * The external imports
 */
import { FaArrowRightLong } from "react-icons/fa6";
import { Suspense, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { TiArrowSyncOutline } from "react-icons/ti";

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

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1400"
        className="relative m-auto min-h-[100vh] pb-32 flex flex-col items-center overflow-hidden lg:flex-row lg:gap-14"
      >
        <div className="fixed h-[200%] w-[100%] -rotate-[15deg] bg-mainColorContrast -top-[50%] -left-[83%] hidden lg:block"></div>
        <div className="my-6 lg:my-0 lg:fixed lg:h-[92%] lg:w-[40%] lg:top-[4%]">
          <div className="relative w-full h-full">
            <ProfilAnimation />
            <TiArrowSyncOutline className="absolute text-white z-50 bottom-[12%] right-[25%] text-2xl lg:text-4xl lg:bottom-[3%] lg:right-[15%] pointer-events-none" />
          </div>
        </div>
        <div className="flex flex-col items-center w-[90%] lg:w-2/4 lg:ml-[40%]">
          <h1 className="text-3xl xl:text-4xl 2xl:text-6xl ">
            <span className="flex justify-center mb-2 text-mainColorContrast">
              Je m'appelle
            </span>
            <span className="flex text-mainColorContrast">
              {owner.firstname} {owner.lastname}.
            </span>
          </h1>
          <div className="min-w-[500px] w-2/3 h-1/2 rounded-3xl overflow-hidden my-8">
            <Canvas camera={{ position: [0, 0.5, 3], fov: 35 }}>
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
          <div className="mt-8">
            <Button text={BUTTON_TEXT} href={BUTTON_HREF} icon={BUTTON_ICON} />
          </div>
        </div>
      </div>
      <OverlayRevealContent />
    </>
  );
}
