import React from "react";

function Footer() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-black text-white font-montserrat">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Portfolio"
            className="inline-flex items-center"
          >
            <svg
              className="w-20 h-15 "
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#fff"
                fill="#000"
                className="hover:stroke-[#e3ca85]"
                stroke-width="1"
              />

              <text
                x="50"
                y="57"
                font-family="Cinzel"
                font-size="45"
                fill="#e3ca85"
                className="hover:stroke-white"
                text-anchor="middle"
                dominant-baseline="middle"
              >
                vp
              </text>
            </svg>

            {/* Branding */}
            <div className="flex flex-col items-center -space-y-2">
              <span className="font-[cinzel] hover:text-white text-[23px] text-[#e3ca85] font-normal">
                vinay
              </span>
              <span className="font-[cinzel] hover:text-white text-[23px] text-[#e3ca85] font-normal">
                patidar
              </span>
            </div>
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">
              Hi, I'm Vinay Patidar, a passionate web developer. Welcome to my
              portfolio!
            </p>
            <p className="mt-4 text-sm">
              Feel free to explore my work and connect with me for exciting
              opportunities.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide">Contact</p>
          <div className="flex">
            <p className="mr-1">Phone:</p>
            <span>7974200013</span>
          </div>
          <div className="flex">
            <p className="mr-1">Email:</p>
            <span>482003@gmail.com</span>
          </div>
          <div className="flex">
            <p className="mr-1">Location:</p>
            <span>Jabalpur</span>
          </div>
        </div>
        <div>
          <p className="text-base font-bold tracking-wide">Follow Me</p>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://github.com/Hackersbot2003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 hover:fill-white transition-colors duration-300"
              >
                <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.23c-3.338.727-4.033-1.416-4.033-1.416-.546-1.38-1.333-1.748-1.333-1.748-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.762-1.606-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.018.005 2.044.137 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.476 5.921.43.37.815 1.096.815 2.213v3.28c0 .319.217.694.825.577C20.565 22.092 24 17.594 24 12.297 24 5.67 18.627.297 12 .297z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 hover:fill-white transition-colors duration-300"
              >
                <path d="M19 0H5C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM8.3 19.2H5.5V9.1h2.8v10.1zm-1.4-11.5c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.5-1.4.9 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.5 1.4zm12.6 11.5h-2.8v-5.5c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.6 1.1-.1.2-.1.5-.1.8v5.8h-2.8s.1-9.4 0-10.1h2.8v1.4c.4-.7 1.1-1.6 2.8-1.6 2.1 0 3.7 1.4 3.7 4.4v5.9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">
          © {new Date().getFullYear()} Vinay Patidar. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/faq" className="text-sm text-white">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/privacy-policy" className="text-sm text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-sm text-white">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
