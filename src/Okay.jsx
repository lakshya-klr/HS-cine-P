import React from 'react'

const Okay = () => {
  return (
    <header>
  
  <div className='mt-6 navbar  h-12 flex m rounded-3xl overflow-hidden justify-around  backdrop-blur-2xl Z-10'>
      <div className="py-1 h-full w-2/4"><img  className="h-full" src="/images/cropped-name.png"/></div>
      <div className="right w-2/6">
        <ul className='flex h-full justify-between '>
          <li className='h-full  flex justify-center items-center navlistitem'>HOME</li>
          <li className='h-full  flex justify-center items-center navlistitem' >ABOUT</li>
          <li className='h-full  flex justify-center items-center navlistitem' >WORK</li>
          <li className='h-full  flex justify-center items-center navlistitem' >CONTACT</li>
        </ul>
      </div>
      
    </div>
  
  <video className="overflow-hidden w-full m-auto " autoPlay loop muted absolute>
    <source src="cinematography/landing-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</header>
  )
}

export default Okay