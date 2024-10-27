import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="flex justify-around items-baseline font-bold p-3 mb-10 "
        data-aos="fade-down"
        data-aos-duration="1000"
        id="navbar"
      >
        <div className=" text-xl ">Portfolio</div>
        <div className=" flex gap-7 text-xl">
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 px-2 pb-[8px]"
            href="#home"
          >
            Home
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 px-2 pb-[8px]"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 px-2 pb-[8px]"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 px-2 pb-[8px]"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 px-2 pb-[8px]"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
