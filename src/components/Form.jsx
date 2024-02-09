/**
 * The external imports
 */
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useState } from "react";
import Modal from "react-modal";

/**
 * The internal imports
 */
import Button from "./button/Button";

export default function Form() {
  const [congratulation, setCongratulation] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const form = useRef();

  const BUTTON_TEXT = "Envoyer";
  const BUTTON_TYPE = "submit";
  const BUTTON_ICON = <IoIosSend />;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const customStyles = {
    content: {
      top: "25%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleFormSubmit = () => {
    emailjs
      .sendForm(
        import.meta.env.VITE_REACT_APP_MY_ID_EMAILJS_API_KEY,
        import.meta.env.VITE_REACT_APP_MY_TEMPLATE_EMAILJS_API_KEY,
        form.current,
        {
          publicKey: import.meta.env
            .VITE_REACT_APP_MY_PUBLIC_KEY_EMAILJS_API_KEY,
        }
      )
      .then(
        () => {
          setCongratulation(true);
          openModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit(handleFormSubmit)}
      className="col-span-3"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col mx-2 mb-3">
          <input
            className="px-6 py-3 rounded-3xl text-md"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="VOTRE PRENOM"
            {...register("firstname", {
              required: "Vous devez rentrer un Prénom 👍",
            })}
            aria-invalid={errors.firstname ? "true" : "false"}
            aria-describedby="firstname-error"
          />
          {errors.firstname && (
            <span
              id="firstname-error"
              role="alert"
              className=" text-red-600 font-medium"
            >
              {errors.firstname.message}
            </span>
          )}
        </div>
        <div className="flex flex-col mx-2 mb-3">
          <input
            className="px-6 py-3 rounded-3xl text-md"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="VOTRE NOM"
            {...register("lastname", { required: "Vous devez rentrer un Nom" })}
            aria-invalid={errors.lastname ? "true" : "false"}
            aria-describedby="lastname-error"
          />
          {errors.lastname && (
            <span
              id="lastname-error"
              role="alert"
              className=" text-red-600 font-medium"
            >
              {errors.lastname.message}
            </span>
          )}
        </div>
        <div className="flex flex-col mx-2 mb-3 md:col-span-2">
          <input
            className="px-6 py-3 rounded-3xl text-md"
            type="email"
            id="email"
            name="email"
            placeholder="VOTRE E-MAIL"
            {...register("email", { required: "Vous devez rentrer un email" })}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="email-error"
          />
          {errors.email && (
            <span
              id="email-error"
              role="alert"
              className=" text-red-600 font-medium"
            >
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col mx-2 mb-3 md:col-span-2">
          <textarea
            className="px-6 py-3 rounded-3xl text-md"
            type="text"
            id="message"
            name="message"
            rows="6"
            cols="30"
            placeholder="VOTRE MESSAGE"
            {...register("message", {
              required: "Vous devez rentrer un message",
              minLength: {
                value: 5,
                message: "Votre message doit faire au minimum 5 caractères",
              },
            })}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby="message-error"
          ></textarea>
          {errors.message && (
            <span
              id="message-error"
              role="alert"
              className=" text-red-600 font-medium"
            >
              {errors.message.message}
            </span>
          )}
        </div>
      </div>
      <div className="block relative">
        <Button text={BUTTON_TEXT} type={BUTTON_TYPE} icon={BUTTON_ICON} />
      </div>
      {congratulation && <Fireworks autorun={{ speed: 1 }} />}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <p>Comme une lettre à la poste! Merci pour ton 📬 message.</p>
      </Modal>
    </form>
  );
}
