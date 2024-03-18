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
import CV_2024 from "../../assets/CV-2024.pdf";
import { DataContext } from "../../context/DataProvider";
import OverlayRevealContent from "../animation/OverlayRevealContent";
import Skills3D from "../animation/Skills3D";

export default function About() {
  const { aboutMe } = useContext(DataContext);

  const BUTTON_TEXT = "Téléchargez moi";
  const BUTTON_HREF = CV_2024;
  const BUTTON_ICON = <FaDownload />;
  const BUTTON_DOWNLOAD = "CV-2024.pdf";

  return (
    <div data-aos="fade-up" data-aos-duration="1200">
      <div className="w-[90%] m-auto pb-10 mb-8">
        <MyTitle span1={"à propos"} span2={"de moi"} shadow={"cv"} />
        <div className="row grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex  flex-col">
            <h3 className="mb-10 lg:text-2xl">informations personnelles</h3>
            <div className="flex flex-col items-center justify-center">
              <div className="text-sm sm:text-base grid grid-cols-1 w-full gap-5 lg:text-lg xl:max-w-full">
                {aboutMe.map(({ id, title, value }) => (
                  <div
                    key={id}
                    className="flex items-center whitespace-nowrap lg:w-[90%]"
                  >
                    <span className="flex flex-nowrap w-2/5 font-semibold">
                      {title}
                    </span>
                    <span className="flex flex-nowrap text-mainColorContrast font-bold">
                      {value}
                    </span>
                  </div>
                ))}
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
      {/* <OverlayRevealContent /> */}
    </div>
  );
}
