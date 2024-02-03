/**
 * The external imports
 */
import { IoIosSend } from "react-icons/io";
import { useForm } from "react-hook-form";

/**
 * The internal imports
 */
import Button from "./button/Button";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="firstname" className="font-medium">
            Prénom
            <span className=" text-red-800 font-bold"> *</span>
          </label>
          <input
            className="px-6 py-3 rounded-3xl"
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
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">
            Nom
            <span className=" text-red-800 font-bold"> *</span>
          </label>
          <input
            className="px-6 py-3 rounded-3xl"
            type="text"
            id="name"
            name="name"
            placeholder="VOTRE NOM"
            {...register("name", { required: "Vous devez rentrer un Nom" })}
            aria-invalid={errors.name ? "true" : "false"}
          />
          {errors.name && (
            <span role="alert" className=" text-red-600 font-medium">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email
            <span className=" text-red-800 font-bold"> *</span>
          </label>
          <input
            className="px-6 py-3 rounded-3xl"
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
        <div className="flex flex-col md:col-span-2">
          <label htmlFor="message" className="font-medium">
            Message
            <span className=" text-red-800 font-bold"> *</span>
          </label>
          <textarea
            className="px-6 py-3 rounded-3xl"
            type="text"
            id="message"
            name="message"
            rows="10"
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
    </form>
  );
}
