import { useEffect, useState } from "react";
import React from "react";
import Typewriter from "./Typewriting";
import aboutimage from "../assets/img1.jpg";

function AboutOutlet() {
  return (
    <div className="bg-black text-white  flex flex-col justify-between items-center    px-0 md:px-16">
      <h2 className="text-4xl absolute  font-[cinzel] font-medium justify-center text-[#e3ca85]">
        About Me
      </h2>
      <main className="flex flex-col px-2 md:flex-row items-center justify-between md:px-8 py-16 ">
        <div className=" w-full  px-6 md:px-0 md:w-1/2 md:mx-12">
          <p className="text-sm md:text-lg px-0 md:px-10 leading-relaxed mt-5  font-[montserrat]">
            Hi, I’m <span className="text-[#e3ca85]">Vinay Patidar</span>, a
            dedicated <span className="text-[#e3ca85]">Web Developer</span> and{" "}
            <span className="text-[#e3ca85]">Graphic Designer</span> who thrives
            on turning ideas into reality. Withexpertise in developing
            responsive, functional websites and designing visually captivating
            graphics, I aim to create seamless digital experiences that leave a
            lasting impression.
          </p>
          <p className="text-sm p-0 sm:text-lg sm:px-10 leading-relaxed mt-4 font-[monserrat]">
            Combining my technical development skills with a flair for creative
            design, I ensure each project is both innovative and effective.
          </p>

          <div className="flex justify-center mt-6 font-montserrat">
            <p className="text-xs md:text-lg md:font-bold md:border-b-2 placeholder-opacity-80 border-[#e3ca85] ">
              {" "}
              <Typewriter
                text="
Let’s bring your vision to life!
"
                typingSpeed={100}
                className=" text-lg  font-[cinzel] text-[#fff]"
                loop={1}
              />{" "}
            </p>
          </div>
        </div>

        <div className="w-full mx-20 md:w-1/3 flex justify-center mt-8 md:mt-0">
          <img
            src={aboutimage}
            alt="Vinay Patidar"
            className="w-64 h-96 md:w-2/3  md:h-2/3   shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}

export default AboutOutlet;
