import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9af4ba22-0e2d-4428-aa3d-7755bf210f18");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      // alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      // alert(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      className="text-center p-6 py-20 lg:px-32 overflow-hidden w-full"
      id="contact"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
        facilis!
      </p>

      <form
        action=""
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        onSubmit={onSubmit}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white py-2 px-12 rounded mb-10">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
