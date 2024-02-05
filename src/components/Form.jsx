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

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSubmit = () => {
    emailjs
      .sendForm("service_akey2cf", "template_z2e34fz", form.current, {
        publicKey: "wEY1a2rYcGO6Q338z",
      })
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
    <form ref={form} onSubmit={handleSubmit(onSubmit)} className="col-span-3">
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
          />
          {errors.firstname && (
            <span role="alert" className=" text-red-600 font-medium">
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
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <span role="alert" className=" text-red-600 font-medium">
              {errors.name.message}
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
          />
          {errors.email && (
            <span role="alert" className=" text-red-600 font-medium">
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
          ></textarea>
          {errors.message && (
            <span role="alert" className=" text-red-600 font-medium">
              {errors.message.message}
            </span>
          )}
        </div>
      </div>
      <div className="block relative">
        <Button text={"Envoyer"} type={"submit"} icon={<IoIosSend />} />
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
