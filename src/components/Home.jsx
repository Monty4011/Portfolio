import React, { useEffect } from "react";
import pdf from "/Exam.pdf";
import Typed from "typed.js";
import { useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Jatin Gupta",
        "Full Stack React Developer"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className=" flex justify-between items-center h-[80vh]" id="home">
        <div
          className="left w-[600px] border-2 rounded-xl flex flex-col gap-5 border-yellow-300  p-7 text-center shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)] bg-[#404797]"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef} className="text-3xl font-bold"></h1>
          <a href={pdf} download="resume.pdf">
            <button
              type="button"
              class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 "
            >
              Download Resume
            </button>
          </a>
        </div>

        <div className="right  ">
          <div
            className=" flex justify-center items-center  "
            data-aos="fade-up-left"
            data-aos-duration="1000"
          >
            <img
              className="image w-60 border-4 border-yellow-300 rounded-full  "
              src="./hero/image2.JPG"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
