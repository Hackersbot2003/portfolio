import React, { useState } from 'react';

function ContactOutlet() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const redirect = () => {
   
    setIsModalOpen(true);
    window.location.href = 'mailto:482003vinaypatidar@gmail.com'; 
    setIsModalOpen("")
  };

 

  const formHandler = (e) => {
    e.preventDefault();
    redirect(); 
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center ">
     

   
      <h1 className="text-5xl font-[cinzel] md:mt-10 text-[#e3ca85] md:mb-12 py-4 text-center">
        Contact Us
      </h1>

  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:w-full w-5/6 max-w-6xl md:space-x-10 px-6 md:px-10">

        <div className="md:space-y-6 md:pt-14 font-[monserrate] ">
          {[{ icon: "https://img.icons8.com/ios-filled/50/ffffff/marker.png", label: "Address", value: "Mastana Chowk, Ranjhi\nJabalpur 482011" },
            { icon: "https://img.icons8.com/ios-filled/50/ffffff/phone.png", label: "Phone No", value: "+91 7974200013" },
            { icon: "https://img.icons8.com/ios-filled/50/ffffff/email.png", label: "Email", value: "482003vinaypatidar@gmail.com" }]
            .map((info, index) => (
              <div key={index} className='space-x-10'>
                <div className="flex font-[montserrat] items-center gap-4 space-x-2">
                  <img src={info.icon} alt={info.label} className="w-10 h-10" />
                  <div>
                    <p className=" md:text-lg text-base font-bold  text-white md:py-2 ">{info.label}</p>
                    <p className="md:text-md text-sm text-white whitespace-pre-line">{info.value}</p>
                  </div>
                </div>
                {index < 2 && <hr className="border-t-2 opacity-25 border-[#e3ca85] my-4" />}
              </div>
            ))}
        </div>


        <div className="bg-black border-opacity-20 hover:shadow-md hover:scale-110 transition-transform duration-300 hover:shadow-white border-[#e3ca85] border-2 p-6 rounded-lg font-[cinzel]  shadow-lg">
          <h2 className="text-3xl text-[#e3ca85] mb-6 font-[cinzel] text-center">Get In Touch</h2>
          <form onSubmit={formHandler} className="space-y-6">
                          {[{ id: "name", placeholder: "Full Name", type: "text" },
              { id: "email", placeholder: "Email Address", type: "email" },
              { id: "message", placeholder: "Text Message", type: "textarea" }]
              .map((input) => (
                <div key={input.id} className=''>
                  {input.type !== "textarea" ? (
                    
                    <input
                      type={input.type}
                      id={input.id}
                      name={input.id}
                      placeholder={input.placeholder}
                      className="md:w-full hover:shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-[#e3ca85]  md:justify-between w-full  p-3 backdrop-brightness-75 bg-[#000] opacity-80 text-white border-2 border-opacity-40 border-[#e3ca85] rounded-lg shadow-sm focus:ring-2 focus:ring-[#e3ca85] focus:border-[#e3ca85] placeholder-gray-400"
                      required
                    />
                  ) : (
                    <textarea
                      id={input.id}
                      name={input.id}
                      placeholder={input.placeholder}
                      className="md:w-full  hover:shadow-md hover:scale-105 transition-transform duration-300 hover:shadow-white md:justify-between w-full  p-3 backdrop-brightness-75 bg-[#000] opacity-80 text-white border-2 border-opacity-40 border-[#e3ca85] rounded-lg shadow-sm focus:ring-2 focus:ring-[#e3ca85] focus:border-[#e3ca85] placeholder-gray-400"
                      rows="4"
                      required
                    ></textarea>
                  )}
                </div>
              ))}
            <button
              type="submit"
              className="w-40 bg-[#e3ca85] hover:bg-transparent hover:border-[#e3ca85] hover:text-[#e3ca85] hover:font-bold hover:border-2 hover:border-opacity-80 hover:shadow-md hover:scale-110  duration-300 hover:shadow-[#e3ca85] text-black  py-2 rounded-lg  font-[cinzel] font-bold  "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

   
    
    </div>
  
  );
  
}

export default ContactOutlet;
