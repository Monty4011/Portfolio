import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div id="experience">
        <h1 className="text-3xl  font-bold px-10 mb-9 mx-auto">EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="flex bg-[#404797] rounded-xl justify-between items-center  my-10 py-5 px-12 border border-yellow-300 shadow-[5px_5px_10px_10px_rgba(101,175,10,0.5)] w-[700px] mx-auto"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div>
                  <img src={`${data.imageSrc}`} alt="" />
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold">{data.role}</h2>
                  <h4 className="text-xl font-bold">
                    <span className="text-[#9ACD32]">{data.startDate}</span>{" "}
                    <span className="text-[#9ACD32]">{data.endDate}</span>{" "}
                    <span className="text-[#ffff00]">{data.location}</span>
                  </h4>

                  <h5 className="text-lg font-semibold text-[#ffff00]">
                    {data.experiences[0]}{" "}
                  </h5>
                  <h5 className="text-lg font-semibold text-[#ffff00]">
                    {data.experiences[1]}{" "}
                  </h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
