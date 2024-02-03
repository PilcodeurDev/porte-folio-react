/**
 * The external imports
 */
import { IoIosSend } from "react-icons/io";

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import Button from "../button/Button";

export default function Contact() {
  return (
    <div className="w-[90%] m-auto md:max-w-[800px]">
      <MyTitle span1={"prendre"} span2={"contact"} shadow={"contact"} />
      <form action="" className="grid grid-cols1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-medium">Prénom</label>
          <input
            type="text"
            id="firstname"
            placeholder="VOTRE PRENOM"
            className="px-6 py-3 rounded-3xl "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">Nom</label>
          <input
            type="text"
            id="name"
            placeholder="VOTRE NOM"
            className="px-6 py-3 rounded-3xl "
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="VOTRE E-MAIL"
            className="px-6 py-3 rounded-3xl "
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-medium">Message</label>
          <textarea
            name="message"
            placeholder="VOTRE MESSAGE"
            id="message"
            cols="30"
            rows="10"
            className="px-6 py-3 rounded-3xl "
          ></textarea>
        </div>
        <div className="block">
          <Button text={"Envoyer"} type={"submit"} icon={<IoIosSend />} />
        </div>
      </form>
    </div>
  );
}
