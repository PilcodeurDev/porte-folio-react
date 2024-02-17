/**
 * The external imports
 */
import { FaDownload } from "react-icons/fa6";
import { useContext } from "react";

/**
 * The internal imports
 */
import Button from "../button/Button";
import MyTitle from "../MyTitle";
import Cv_simon_despres from "../../assets/Simon_Despres.pdf";
import { DataContext } from "../../context/DataProvider";
import OverlayRevealContent from "../animation/OverlayRevealContent";
import Skills3D from "../animation/Skills3D";

export default function About() {
  const { aboutMe } = useContext(DataContext);

  const BUTTON_TEXT = "Télécharger moi";
  const BUTTON_HREF = Cv_simon_despres;
  const BUTTON_ICON = <FaDownload />;
  const BUTTON_DOWNLOAD = "Simon_Despres.pdf";

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[90%] m-auto pb-10 mb-8">
        <MyTitle span1={"à propos"} span2={"de moi"} shadow={"cv"} />
        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex  flex-col">
            <h3 className="mb-10 lg:text-2xl">informations personnelles</h3>
            <div className="flex flex-col items-center justify-center">
              <div className="flex justify-center w-full max-w-[600px]">
                <div className="grid grid-cols-1 w-full gap-5 2xl:grid-cols-2">
                  {aboutMe.map(({ id, title, value }) => (
                    <div
                      key={id}
                      className="flex justify-between items-center whitespace-nowrap text-lg lg:text-xl lg:w-[85%]"
                    >
                      <span className="flex flex-nowrap font-semibold">
                        {title}
                      </span>
                      <span className="flex flex-nowrap text-mainColorContrast font-bold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="my-14">
                <Button
                  text={BUTTON_TEXT}
                  href={BUTTON_HREF}
                  icon={BUTTON_ICON}
                  download={BUTTON_DOWNLOAD}
                />
              </div>
            </div>
          </div>
          <div className="">
            <h3 className="mb-10 lg:text-2xl">Mes compétences</h3>
            <div
              id="particules-container"
              className="h-[500px] w-full mb-[10vh] bg-slate-200"
            >
              <Skills3D containerId="particules-container" />
            </div>
          </div>
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
