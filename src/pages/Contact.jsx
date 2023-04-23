import emailjs from "@emailjs/browser";
import process from "process";
import React, { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-gray-900 space-y-8">
      <div className="py-8 lg:py-12 px-4 mx-auto max-w-screen-md">
        <h2 className="m-8 py-12 text-2xl tracking-tight font-extrabold text-center text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-12 font-light text-center text-gray-500 md:text-lg text-sm">
          Got a travel question? Need details about our tour programs and cost?
          Feel free to contact us.
        </p>
        <div>
          <label
            htmlFor="name"
            className="block m-2 text-sm font-medium text-gray-300"
          >
            Name:
          </label>
          <input
            type="text"
            name="user_name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black shadow-sm-light"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block m-2 text-sm font-medium text-gray-300"
          >
            Email:
          </label>
          <input
            type="email"
            name="user_email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black shadow-sm-light"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block m-2 text-sm font-medium text-gray-300"
          >
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm text-black shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block m-2 text-sm font-medium text-white"
          >
            Your message
          </label>
          <textarea
            name="message"
            rows="6"
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm-light border text-black"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <input
          type="submit"
          value="Submit"
          className="w-full py-4 px-10 mt-4 text-sm font-semibold text-center text-white rounded-lg sm:w-fit  focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-400 focus:ring-blue-700"
        />
      </div>
    </form>
  );
};

export default Contact;
