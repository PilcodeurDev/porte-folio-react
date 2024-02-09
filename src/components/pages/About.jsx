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

export default function About() {
  const { skillData, aboutMe } = useContext(DataContext);

  const BUTTON_TEXT = "Télécharger moi";
  const BUTTON_HREF = Cv_simon_despres;
  const BUTTON_ICON = <FaDownload />;
  const BUTTON_DOWNLOAD = "Simon_Despres.pdf";

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[90%] m-auto">
        <MyTitle span1={"à propos"} span2={"de moi"} shadow={"cv"} />
        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex justify-center">
            <div className="w-full mb-28">
              <h3 className="mb-10">informations personnelles</h3>
              <div className="grid grid-cols-1 gap-7 2xl:grid-cols-2">
                {aboutMe.map(({ id, title, value }) => (
                  <div
                    key={id}
                    className="flex justify-between lg:w-[85%] whitespace-nowrap"
                  >
                    <span className="flex flex-nowrap text-xl font-semibold">
                      {title}
                    </span>
                    <span className="flex flex-nowrap text-xl text-mainColorContrast font-bold">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
              <Button
                text= {BUTTON_TEXT}
                href={BUTTON_HREF}
                icon={BUTTON_ICON}
                download={BUTTON_DOWNLOAD}
              />
            </div>
          </div>
          <div className="">
            <h3 className="mb-3">Mes compétences</h3>
            <div className="flex flex-wrap">
              {skillData.map(({ id, logo, name }) => (
                <div
                  key={id}
                  className="flex flex-col justify-center items-center w-56 h-56   scale-[.6]"
                >
                  <div className=" flex justify-center items-center h-4/5 w-4/5 transition-all duration-700 hover:scale-125 hover:opacity-0">
                    {logo}
                  </div>
                  <div className="mt-5 font-bold text-4xl whitespace-nowrap transition-all duration-700 hover:scale-125">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <OverlayRevealContent />
    </div>
  );
}
