import { useEffect, useState } from "react";
import React from "react";
import Typewriter from "./Typewriting";
import SpotlightCard from "./SpotlightCard";
import { Photos } from "../constants/Photosdata.js";
import ShowGallery from "./ShowGallery";
import StarBorder from "./StarBorder";
import { Link, useNavigate } from "react-router-dom";
import Gallery from "./Gallery";

function ProffesionalSkills() {
 
  return (
    <div className="bg-black text-white py-10 flex flex-col justify-between items-center    px-0 ">
      <h2 className="text-4xl absolute  font-[cinzel] font-medium justify-center text-[#e3ca85]">
        Proffesional skills
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center  py-16 ">
        <div className="w-2/3   md:w-1/2 flex justify-center mt-8 md:mt-0">
          <SpotlightCard className="rounded-lg p-8   hover:shadow-lg hover:shadow-[#e3ca85] ">
            <div className="   justify-items-center items-center  md:w-80 md:h-96 r bg-transparent">
              <ShowGallery />
            </div>
          </SpotlightCard>
        </div>
        <div className=" md:w-1/2 mx-10 mr-10 ">
          <p className="text-sm md:text-lg p-0  leading-relaxed mt-5 md:font-[15px] font-[22px] font-[montserrat]">
            Professional skills in <span className="text-[#e3ca85]">Figma</span>{" "}
            for creating intuitive and visually appealing{" "}
            <span className="text-[#e3ca85]">Web Designs</span>, ensuring a
            seamless user experience. For
            <span className="text-[#e3ca85]">Graphic Design</span>, I utilize{" "}
            <span className="text-[#e3ca85]">Canva</span> to craft compelling
            and impactful visuals that align with brand identities.
            Additionally, I have expertise in{" "}
            <span className="text-[#e3ca85]">on-page SEO</span>, optimizing
            website content to enhance visibility, improve search rankings, and
            drive organic traffic.
          </p>
          <div className="flex flex-row py-7 space-x-8">
            <div>
              <h1 className="font-[cinzel] text-sm text-[#e3ca85]">
                web design
              </h1>
              <img
                className="w-25 hover:scale-110 transition-transform duration-300 rounded-md h-10"
                src="https://th.bing.com/th?id=OIP.6vAaXFqh_Vq-NtE78gM60gHaDt&w=349&h=174&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
              />
            </div>
            <div>
              <h1 className="font-[cinzel] text-sm text-[#e3ca85]">
                Graphic design
              </h1>
              <img
                className="w-25 hover:scale-110 transition-transform duration-300 rounded-md h-10 bg-black"
                src="https://th.bing.com/th/id/OIP.3rXv1Y97qpyRIyk3SvVuqQHaEc?pid=ImgDet&w=184&h=110&c=7&dpr=1.3"
              />
            </div>
          </div>
          <StarBorder
            as="button"
            className="custom-class hover:scale-105 transition-transform duration-300"
            color="cyan"
            speed="5s"
            
          >
           <Link to="/Gallery">
           <button onClick={"/Gallery"}>
            Gallery
           </button>
           </Link>
          </StarBorder>
        </div>
      </div>
      <div className="flex justify-center mt-6 font-montserrat">
        <p className="md:text-base px-5 md:px-0 text-xs  font-[cinzel] m-auto text-[#fff]">
          {" "}
          <Typewriter
            text="Designing intuitive, user-focused experiences that blend creativity with functionality."
            typingSpeed={100}
            className="  font-[cinzel] text-[#fff]"
            loop={1}
          />{" "}
        </p>
      </div>
    </div>
  );
}

export default ProffesionalSkills;
