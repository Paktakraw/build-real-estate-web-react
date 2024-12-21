import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="py-10 px-4 md:px-20 lg:px-32 bg-gray-900 overflow-hidden"
      id="footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ad
            incidunt! Corporis repellat cumque vitae culpa quod maxime corrupti,
            provident atque reprehenderit magni accusantium. Iusto?
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#header" className="hover:text-white">
              Home
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact us
            </a>
            <a href="#" className="hover:text-white">
              Privacy policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our newsletter
          </h3>
          <p className="text-gray-400 mb-4 max-w-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none md:w-auto w-full"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 text-center mt-8 pt-8 text-gray-400">
        Copyright 2024 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
