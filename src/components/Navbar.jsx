import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="flex justify-between sm:justify-around items-baseline font-bold px-3 sm:p-3 mb-10"
      >
        <div className="text-lg sm:text-xl ">Portfolio</div>
        
        <div className=" flex gap-3 sm:gap-7 text-base sm:text-xl">
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 sm:px-2 pb-[8px]"
            href="#home"
          >
            Home
          </a>
          {/* <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 sm:px-2 pb-[8px]"
            href="#experience"
          >
            Experience
          </a> */}
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 sm:px-2 pb-[8px]"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 sm:px-2 pb-[8px]"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="border-y-4 border-transparent  hover:border-b-yellow-300 pt-2 sm:px-2 pb-[8px]"
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
