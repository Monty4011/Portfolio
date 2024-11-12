import React, { useEffect } from "react";
import pdf from "/resume.pdf";
import Typed from "typed.js";
import { useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "My Name is Jatin Gupta",
        "Full Stack React Developer",
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
      <div
        className=" flex justify-between sm:justify-evenly gap-5 sm:gap-0 items-center"
      >
        <div className="left sm:w-[600px] border-2 rounded-xl flex flex-col justify-center border-yellow-300 h-52 px-5 py-3 sm:p-7 text-center shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)] bg-[#404797]">
          <h1 ref={typedRef} className="text-xl sm:text-3xl font-bold h-[50%]"></h1>
          <a href={pdf} download="resume.pdf">
            <button
              type="button"
              class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-200 "
            >
              Download Resume
            </button>
          </a>
        </div>

        <div className="right  ">
          <div className=" flex justify-center items-center  ">
            <img
              className="w-96 sm:w-60 border-2 border-yellow-300 rounded-full shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)] "
              src="./hero/image2.JPG"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
