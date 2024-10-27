import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div id="contact">
        <h1 className="text-3xl font-bold my-9 px-10">CONTACT ME</h1>
        <div
          className="flex justify-center items-center mb-10"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.instagram.com/jatin_kunchal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <FaInstagram className=" h-6 w-6  " />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100017217006608"
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <FaFacebook className=" h-6 w-6 " />
          </a>
          <a
            href="https://www.linkedin.com/in/jatin-gupta-9999b01b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <FaLinkedin className=" h-6 w-6 " />
          </a>
          <a
            href="https://x.com/Jatin_4011?t=DY-BU9cgpdzOXcMFiVzIbg&s=08 "
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <FaXTwitter className=" h-6 w-6 " />
          </a>
          <a
            href="https://github.com/Monty4011"
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <FaGithub className=" h-6 w-6 " />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=jatin04gupta2004@gmail.com"
            target="_blank"
            className="h-16 m-3 mb-10 w-16 rounded-full flex justify-center items-center bg-black border border-yellow-300 hover:bg-[#404797] hover:shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
          >
            <IoIosMail className=" h-6 w-6 " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
