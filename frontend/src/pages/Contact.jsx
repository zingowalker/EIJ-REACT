import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, subject, message } = e.target;

    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });

    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-900 space-y-8">
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
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black shadow-sm-light"
            type="text"
            id="name"
            required
            placeholder="Your Name"
          />
        </div>
        <div>
          <label
            className="block m-2 text-sm font-medium text-gray-300"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 text-black shadow-sm-light"
            placeholder="Your Email"
            type="email"
            id="email"
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
            className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm text-black shadow-sm-light"
            placeholder="Let us know how we can help you"
            type="text"
            id="subject"
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
            rows="6"
            className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm-light border text-black"
            placeholder="Leave a comment..."
            id="message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-4 px-10 mt-4 text-sm font-semibold text-center text-white rounded-lg sm:w-fit  focus:ring-4 focus:outline-none bg-blue-500 hover:bg-blue-400 focus:ring-blue-700"
        >
          {status}
        </button>
      </div>
    </form>
  );
};

export default Contact;
