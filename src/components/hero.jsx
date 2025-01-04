import React from "react";
import Typewriter from "./Typewriting";
import AboutOutlet from "./AboutOutlet";
import CoadingSkills from "./CoadingSkills.jsx";
import ProffesionalSkills from "./ProffesionalSkills";
import ContactOutlet from "./ContactOutlet";
import SpotlightCard from "./SpotlightCard.jsx";
import vinayimage from "../assets/img2.jpg"
import Arrow from "./Arrow.jsx";
import Gallery from "./Gallery.jsx";
const Hero = () => {
  return (
    <div>
     
      <section className="flex flex-col  lg:flex-row   px-0 py-0 w-full sm:px-20 md:gap-x-20 items-center lg:justify-between space-x-10 bg-dark text-white min-h-screen ">
        {/* Profile Image */}
        <div className=" md:px-10 w-4/5  md:py-10 mt-7 md:left-12 justify-center  ">
        
          <img
            src={vinayimage}
            alt="Vinay Patidar"
            className="rounded-full hover:scale-110 transition-transform  duration-300 m-auto   border-opacity-0 hover:border-opacity-100 opacity-80  hover:opacity-100 hover:shadow-md  hover:shadow-[#e3ca85] w-64 md:w-96 md:h-96 h-64 object-center object-contain"
          />
          
           <div className="flex hover:scale-110 transition-transform duration-300 top-80  right-0 flex-row justify-end ">
            <SpotlightCard className="p-3 rounded-2xl hover:shadow-md hover:shadow-[#e3ca85] md:hover:border-2  border-white border-opacity-40 hover:border-opacity-100 ">
              {/* Custom Icon */}
              <a
                href="https://your-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 451.319 451.319"
                  xmlSpace="preserve"
                  fill="#000000"
                  className="h-10 w-10"
                >
                  <circle
                    style={{ fill: "#e3ca85" }}
                    cx="225.659"
                    cy="225.638"
                    r="225.638"
                  ></circle>
                  <path
                    style={{ opacity: 0.1, enableBackground: "new" }}
                    d="M129.188,96.37v258.566l96.38,96.38c0.031,0,0.061,0.002,0.092,0.002 c108.013,0,198.249-75.908,220.403-177.276L268.391,96.37C268.391,96.37,129.188,96.37,129.188,96.37z"
                  ></path>
                  <polygon
                    style={{ fill: "#FFFFFF" }}
                    points="268.371,96.378 129.169,96.378 129.169,354.944 322.152,354.944 322.152,150.159 "
                  ></polygon>
                  <polygon
                    style={{ fill: "#E1E6E9" }}
                    points="268.371,150.159 322.152,150.159 268.371,96.378 "
                  ></polygon>
                  <polygon
                    style={{ fill: "#EBF0F3" }}
                    points="322.152,150.159 268.371,150.159 322.152,187.438 "
                  ></polygon>
                  <g>
                    <path
                      style={{ fill: "#F6C358" }}
                      d="M179.284,162.098l0.023,0.015l0,0v-0.02l0.01,0.014l0.012-0.008v0l0.004-0.005v0.003l8.473-5.663 l0.001,0v-9.385c-0.641,0.441-1.256,0.92-1.834,1.441c-3.718,3.361-7.365,2.785-7.365,2.785c-2.224,0.059-5.393-2.22-6.744-3.281 c-0.344-0.27-0.697-0.528-1.059-0.773v9.212l0,0L179.284,162.098z"
                    ></path>
                  </g>
                  <path
                    style={{ fill: "#64798A" }}
                    d="M193.474,137.047c0,0,0.49-3.308,2.184-6.026c0.411-0.66,0.636-1.418,0.636-2.196v-8.551 c0,0-0.534-4.193-4.65-5.184c0,0,1.677-3.571-2.668-4.415h-16.009l0,0c-5.852,0-10.597,4.744-10.597,10.597v6.282 c0,1.361,0.456,2.685,1.308,3.747c0.671,0.835,1.367,2.148,1.475,4.048"
                  ></path>
                  <path
                    style={{ fill: "#FCD462" }}
                    d="M178.608,153.056c0,0,3.647,0.576,7.365-2.785c0.578-0.522,1.193-1,1.834-1.441 c0.063-0.044,0.125-0.089,0.189-0.132c1.646-1.106,4.809-4.171,5.479-11.651v-9.911c0,0-0.381-3.507-4.117-4.879l-5.552-1.949 c-1.035-0.363-2.165-0.349-3.191,0.04c-1.15,0.437-2.669,1.002-3.625,1.308c-0.458,0.147-0.936,0.22-1.417,0.22h-5.275 c0,0-4.117,0.534-5.146,5.145v8.327v1.927c0,0,0.179,8.1,5.542,11.65c0.038,0.025,0.073,0.052,0.111,0.077 c0.362,0.244,0.715,0.503,1.059,0.773C173.215,150.836,176.384,153.115,178.608,153.056z"
                  ></path>
                  <g>
                    <polygon
                      style={{ fill: "#D5D6DB" }}
                      points="182.048,161.783 180.312,164.275 181.915,174.376 185.931,167.073 "
                    ></polygon>
                  </g>
                  <path
                    style={{ fill: "#3A556A" }}
                    d="M179.323,178.535l0.009,0.017h3.576h27.313c1.955,0,3.443-1.754,3.124-3.683l-1.539-9.292 c-0.415-2.506-2.151-4.593-4.54-5.457l-14.886-5.386"
                  ></path>
                </svg>
              </a>
              <h1 className="font-[15px] text-[cinzel] text-[#e3ca85]">View CV/Resume</h1>
            </SpotlightCard>
          </div>
          <div>
            <div className="flex space-x-4 py-12">
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/9977096295"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 48 48"
                  className="md:h-7 h-6 w-6 md:w-7 rounded-sm hover:shadow-md hover:shadow-white"
                >
                  <path
                    fill="#fff"
                    d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                  ></path>
                  <path
                    fill="#fff"
                    d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                  ></path>
                  <path
                    fill="#cfd8dc"
                    d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                  ></path>
                  <path
                    fill="#40c351"
                    d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300  rounded-sm hover:shadow-md hover:shadow-white"
              >
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="md:h-7 h-6 w-6 md:w-7"
                >
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  ></rect>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  ></rect>
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  ></rect>
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  ></path>
                  <defs>
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      <stop stopColor="#B13589"></stop>
                      <stop offset="0.79309" stopColor="#C62F94"></stop>
                      <stop offset="1" stopColor="#8A3AC8"></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      <stop stopColor="#E0E8B7"></stop>
                      <stop offset="0.444662" stopColor="#FB8A2E"></stop>
                      <stop offset="0.71474" stopColor="#E2425C"></stop>
                      <stop
                        offset="1"
                        stopColor="#E2425C"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      <stop offset="0.156701" stopColor="#406ADC"></stop>
                      <stop offset="0.467799" stopColor="#6A45BE"></stop>
                      <stop
                        offset="1"
                        stopColor="#6A45BE"
                        stopOpacity="0"
                      ></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </a>
              {/* Gmail Icon */}
              <a
                href="mailto:482003vinaypatidar@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300  rounded-sm hover:shadow-md hover:shadow-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Gmail"
                  role="img"
                  viewBox="0 0 512 512"
                  fill="#000000"
                  className="md:h-7 h-6 w-6 md:w-7"
                >
                  <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                  <path fill="#f2f2f2" d="M120 392V151.075h272V392"></path>
                  <path fill-opacity=".05" d="M256 285L120 392l-4-212"></path>
                  <path
                    fill="#d54c3f"
                    d="M120 392H97c-12 0-22-10-22-23V143h45z"
                  ></path>
                  <path fill-opacity=".08" d="M317 392h77V159H82"></path>
                  <path fill="#f2f2f2" d="M97 121h318L256 234"></path>
                  <path
                    fill="#b63524"
                    d="M392 392h23c12 0 22-10 22-23V143h-45z"
                  ></path>
                  <path
                    fill="none"
                    stroke="#de5145"
                    stroke-linecap="round"
                    stroke-width="44"
                    d="M97 143l159 115 159-115"
                  ></path>
                </svg>
              </a>
             
            </div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className=" lg:text-left px-2 md:px-0 md:font-[montserrat] mt-8 lg:mt-0 lg:ml-12">
          <div className="flex  sm:py-10 flex-col md:space-x-24 -space-y-3 item-center space-x-14 md:-space-y-4">
            <span className="font-[cinzel] text-[30px] md:text-[40px]  text-[#e3ca85]   ">
              vinay
            </span>
            <span className="font-[cinzel] text-[30px]  md:text-[40px] text-[#e3ca85]  ">
              patidar
            </span>
          </div>
          <p className="text-sm md:text-lg font-[montserrat] ">
            Hi, I'm{" "}
            <span className="font-[cinzel]  text-[#e3ca85]  ">
              Vinay patidar
            </span>
            , a{" "}
            <span className="font-[cinzel]  text-[#e3ca85]  ">
              Web Developer
            </span>{" "}
            and{" "}
            <span className="font-[cinzel]  text-[#e3ca85]  ">
              Graphic Designer
            </span>
          </p>
          <p className="mt-4 text-sm md:text-lg leading-relaxed">
            Specializing in{" "}
            <span className="font-[cinzel]  text-[#e3ca85]  ">
              Web Development
            </span>{" "}
            and{" "}
            <span className="font-[cinzel]  text-[#e3ca85]  ">
              Graphic Designer
            </span>
            . Expertise in creating functional, responsive websites and visually
            appealing designs. Combining technical expertise and creativity to
            deliver impactful digital solutions.
          </p>
          <div className="flex justify-center  mt-6 font-montserrat">
            <p className="text-xs md:text-lg  font-[montserrat]   ">
              {" "}
              <Typewriter
                text="
 Combining technical expertise and creativity to deliver impactful digital solutions.
"
                typingSpeed={100}
                className=" text-lg  font-[montserrat] text-[#fff]"
                loop={1}
              />{" "}
            </p>
          </div>

         
        </div>
      </section>
      <AboutOutlet />
      <CoadingSkills />
      <Gallery className="hidden "/>

      <ContactOutlet />
      
    </div>
  );
};

export default Hero;
