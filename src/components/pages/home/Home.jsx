/**
 * The external imports
 */
import { FaArrowRightLong } from "react-icons/fa6";

/**
 * The internal imports
 */
import "./Home.css";
import Button from "../../button/Button";

export default function Home() {
  const btnText = "A propos de moi";
  const btnIcon = <FaArrowRightLong />;
  const btnHref = "/about";

  return (
    <div className="container m-auto h-full flex flex-col gap-20 items-center relative lg:flex-row">
      <div
        className="profil w-80 h-80 mt-[15%] border-[#183966] rounded-full border-4
      lg:w-[30%] lg:h-[70%] lg:fixed lg:mt-0 lg:top-[15%] lg:left-10 lg:rounded-[30px] lg:border-none
      xl:top-[4%] xl:left-14 xl:h-[92%]"
      ></div>
      <div className=" w-2/3 lg:ml-[40%]">
        <div className="relative -top-5 pr-5">
          <h1 className="pl-12 dash">
            <font className=" flex text-[#BBA06B]">je m'appelle</font>
            <font className=" flex text-[#BBA06B]">simon despres .</font>
            <font className=" flex ">concepteur de</font>
            <font className=" flex ">sites web</font>
          </h1>
          <p className="lg:w-[80%] text-xl my-5">
            Je suis concepteur Web ainsi que développeur front-end basé à la
            frontière Franco-Suisse. Je suis passionné par la création
            d'interface utilisateur interactive et dynamique qui captivera vos
            visiteurs dès les premières secondes.
          </p>
          <Button text={btnText} href={btnHref} icon={btnIcon} />
        </div>
      </div>
    </div>
  );
}
