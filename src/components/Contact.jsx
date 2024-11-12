import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1 className="text-xl sm:text-3xl font-bold mt-9 sm:px-10">
          CONTACT ME
        </h1>
        <ul className=" pl-6 sm:px-48 sm:flex my-5 sm:justify-center sm:items-center gap-10 list-disc">
          <li>📧 jatin04gupta2004@gmail.com</li>
          <li>📱+918307076249</li>
        </ul>
        <div
          className="flex justify-center items-center mb-10"
        >
          <a
            href="https://www.linkedin.com/in/jatin-gupta-9999b01b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            className="h-12 m-3 mb-10 w-12 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)]"
          >
            <FaLinkedin className=" h-6 w-6 " />
          </a>
          <a
            href="https://github.com/Monty4011"
            target="_blank"
            className="h-12 m-3 mb-10 w-12 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)]"
          >
            <FaGithub className=" h-6 w-6 " />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jatin04gupta2004@gmail.com"
            target="_blank"
            className="h-12 m-3 mb-10 w-12 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)]"
          >
            <IoIosMail className=" h-6 w-6 " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
