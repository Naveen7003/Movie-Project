import React, { useState } from "react";
import contact from "/contact-illustration.gif";
import { Link, useNavigate } from "react-router-dom";
const ContactUs = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);   
  };

  return (
    <div className="h-screen w-screen flex bg-[#27272a]">
        
      <div className="h-full w-[50%] p-4 flex flex-col ">
      <Link
          onClick={() => navigate(-1)}
          className="hover:bg-[#6556cd] text-white mr-3 text-3xl ri-arrow-left-line"
        ></Link>
        <h1 className="text-2xl font-semibold mt-3 ml-[30%] pb-5 text-zinc-400">
          Contact Us
        </h1>
        <h1 className="text-white font-black text-6xl ml-[30%]">
          Let's talk about
          <br />
          your project
        </h1>
        <h1 className="text-white font-semibold text-2xl mt-16 ml-[30%]">
          info@tmdb.com
        </h1>
        <h1 className="text-white font-semibold text-xl mt-2 ml-[30%]">
          +91 6264935076
        </h1>
        <div className="flex gap-4 p-2 text-white mt-2 ml-[30%] text-2xl">
          <i className="ri-earth-fill"></i>
          <i className="ri-facebook-circle-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-twitter-x-fill"></i>
        </div>
        <h1 className="text-zinc-400 font-semibold text-xl mt-10 ml-[30%]">
          More Info
        </h1>
        <h1 className="text-zinc-400 font-semibold text-md  ml-[30%]">
          Loonavala Street
        </h1>
        <h1 className="text-zinc-400 font-semibold text-md  ml-[30%]">
          Building no:-8, That Street
        </h1>
        <h1 className="text-zinc-400 font-semibold text-md  ml-[30%]">
          ID : jfjdh2445
        </h1>
        <h1 className="text-zinc-400 font-semibold text-md  ml-[30%]">
          Telephone No: 722 4546454
        </h1>
        <h1 className="text-zinc-400 font-semibold text-md  ml-[30%]">
          Gmail: prajapatinaveen703@gmail.com
        </h1>

        <h1></h1>
      </div>
      <div className="flex items-center justify-center min-h-screen ml-20 bg-[#27272a] text-white">
        <div className=" p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 h-32"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
