import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <>
      <div className="my-9" id="skills">
        <h1 className="text-3xl font-bold my-9 px-10">SKILLS</h1>

        <div className="flex justify-center items-center flex-wrap gap-8">
          {skills.map((data) => (
            <>
              <div
                key={data.id}
                className="flex flex-col justify-center items-center w-[33.33%] bg-black m-3 p-5 rounded-xl border border-yellow-300 shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)]"
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img className="w-20" src={`${data.imageSrc}`} alt="" />
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
