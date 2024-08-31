import React from 'react'

const Sixthpage = () => {
  return (
    <div className='sixthpage h-screen w-full new-amsterdam-regular'>

        <div className="imwrapper m-auto flex items-center justify-center">

        <div className="leftsix h-full flex items-center justify-center w-2/4 ">
        
        <div className='polaroid  relative overflow-hidden p-5 pb-0'>
          
          <div className='imgwrapper object-cover '>
            <img className='object-cover h-full w-full' src='/images/cropped me.png'></img>
        </div>
            <h2 className='polaroidtext style-script-regular'>Hey ! that's me</h2>
            
        </div>

        </div>
        <div className="rightsix h-full w-2/4 flex justify-start items-center">
        
        <div className="aboutme">

        <h2>lights camera action</h2>
        <p>Based in India, I am a visual storyteller dedicated to delivering impactful content across all formats, specializing in professional videography, photography, cinematography, and expert video editing.</p>

        </div>
        
        
        </div>

        </div>

    </div>
  )
}

export default Sixthpage