import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
export default function Projects() {
  return (
    <section id="projects" className="text-crimson-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon
            style={{ width: "100px" }}
            className="mx-auto inline-block w-10 mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-light">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I always had a keen interest in developing a unique project. Using
            new technologies like React gives me a better understanding of how to
            cope-up with new technologies/Languages.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div className="card bg-secondary">
              <div className="card-body">
                <h5 className=" card-title text-center text-muted d-flex ">{project.head}</h5>
                <div
                  className=" sm:w-1/2 w-100 p-2"
                  style={{ textDecoration: "none" }}
                >
                  <div className="flex relative">
                    <img
                      style={{width:"250px",height:"200px"}}
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={project.image}
                    />

                    <div className="text-center h4 text-light ">
                      <h2
                        style={{ color: "white" }}
                        className="text-muted tracking-widest text-sm title-font font-medium text-light-400 mb-1"
                      >
                        {project.subtitle}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-light mb-1">
                        {project.title}
                      </h1>
                      <p style={{ color: "aqua" }} className=" leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}

