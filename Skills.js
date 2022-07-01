import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import skills from "./data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon
            style={{ width: "100px" }}
            className="w-10 inline-block mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Having various skills in programming languages and, also have the knowledge of tools used for programming 
          </p>
        </div>
        <div className=" d-flex flex-wrap  lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div 
            className="sm:w-1/2 w-full"
              key={skill}
              // style={{ display: "inline-block", textAlign: "left" }}
            >
              <div
                className="d-flex  bg-gray-800 rounded flex p-3 h-full mx-3 my-0 items-center"
                // style={{width:"500px",height:"150px",justifyContent:"space-between"}}
              >
                <div className="flex bg-gray-800 rounded flex p-0 h-full items-center">
                  <BadgeCheckIcon
                    style={{ width: "30px"}}
                    className="inline-block bg-primary rounded-circle 
                text-white-200 w-2 h-3 flex-shrink-0 mr-4 text-info "
                  />
                  {skill.span}

                  <p className="text-white"></p>
                <p className="title-font fw-bolder font-medium text-muted h-full text-center">
                  {skill.title}
                </p>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
