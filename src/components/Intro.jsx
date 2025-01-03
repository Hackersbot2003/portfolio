import React from 'react'

function Intro() {
  return (
    <div className='bg-green-400 flex flex-row col-span-3 space-x-10 justify-center m-auto min-h-full'>
      <div className='bg-slate-900 mx-auto col-span-1 w-full'>
        <div className='flex-colpx-10 py-10 col-span-12 '>
        <img
          src="myphoto.jpg"
          alt="Vinay Patidar"
          className="rounded-full col-span-10 border-4 border-gold w-64 h-64 object-cover"
        />
            <div className='col-span-2 bg-white'>
                <h1 className='text-[#ff0000]'>social media</h1>
            </div>
        </div>
      </div>
     <div className='bg-yellow-50 w-full mx-auto col-span-2'>
        <div className='flex flex-col bg-slate-200'>
            <span className='bg-white text-start'>vinay</span>
            <span className='bg-white text-end'>patidar</span>
        </div>
        <div></div>
        <div></div>
        <div></div>
     </div>
    </div>
  )
}

export default Intro
