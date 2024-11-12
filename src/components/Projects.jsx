import React from "react";
import projects from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="my-9" id="projects">
        <h1 className="text-xl sm:text-3xl font-bold my-9 sm:px-10">PROJECTS</h1>

        <div className="flex justify-center items-center gap-10 flex-wrap  ">
          {projects.map((data) => (
            <>
              <div
                className="border hover:shadow-[1px_1px_10px_1px_rgba(101,175,10,0.5)] border-yellow-300 rounded-xl w-[240px] object-cover h-[330px] flex flex-col  justify-start items-center gap-5"
                key={data.key}
              >
                <div>
                  <img
                    className="w-60 h-40 rounded-t-xl"
                    src={`${data.imageSrc}`}
                    alt="preview-image"
                  />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div>{data.title}</div>
                  <div className="text-center">
                    {data.description.length > 60
                      ? `${data.description.slice(0, 60)}...`
                      : data.description}
                  </div>

                  <div className="flex justify-center items-center gap-5 mt-3 ">
                    {data.demo && (
                      <div>
                        <a href={data.demo} target="_blank">
                          <button
                            type="button"
                            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                          >
                            Demo
                          </button>
                        </a>
                      </div>
                    )}
                    <div>
                      <a href={data.source} target="_blank">
                        <button
                          type="button"
                          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                        >
                          Code
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
