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
  const btnText = 'A propos de moi'
  const btnIcon = <FaArrowRightLong />
  const btnHref = '/about'

  return (
    <div className="container m-auto h-full flex items-center">
      <div className="profil fixed w-[30%]"></div>
      <div className="center-text">
        <div className="text-presentation">
          <h1>
            <font>je m'appelle</font>
            <font>simon despres .</font>
            <font>concepteur de</font>
            <font>sites web</font>
          </h1>
          <p>
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
