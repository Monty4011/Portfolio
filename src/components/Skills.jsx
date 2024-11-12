import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="my-9" id="skills">
        <h1 className="text-xl sm:text-3xl font-bold my-9 sm:px-10">SKILLS</h1>

        <div className="flex justify-center items-center flex-wrap gap-3 sm:gap-8">
          {skills.map((data) => (
            <>
              <div
                key={data.id}
                className="flex flex-col justify-center items-center w-1/3 sm:w-[20%] bg-gray-900 m-3 p-3 sm:p-5 rounded-xl border border-yellow-300 shadow-[1px_1px_10px_1px_rgba(101,175,10,0.4)]"
              >
                <img className=" w-10 sm:w-20" src={`${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
