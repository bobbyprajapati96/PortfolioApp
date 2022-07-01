import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "./data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 sm-auto mx-auto text-center">
        <UsersIcon
          style={{ width: "100px" }}
          className="w-10 inline-block mb-4"
        />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Client Testimonials
        </h1>
        <div className="d-flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8  ounded">
                <TerminalIcon
                  style={{ width: "100px" }}
                  className="text-warning block w-8 text-gray-500 mb-4"
                />
                <p className="fw-bolder inline-block leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="p-0 inline-flex items-center">
                  <img
                    style={{ width: "150px" }}
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="fw-bold title-font font-medium text-white">
                      <br />
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      <br />
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
