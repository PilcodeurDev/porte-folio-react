/**
 * The external imports
 */

/**
 * The internal imports
 */
import MyTitle from "../MyTitle";
import Form from "../Form"

export default function Contact() {


  return (
    <div className="w-[90%] m-auto md:max-w-[800px]">
      <MyTitle span1={"prendre"} span2={"contact"} shadow={"contact"} />
      <Form />
    </div>
  );
}
