import React from 'react'

const Landing = () => {
  return (<div className='h-auto w-full overflow-hidden landingpage relative'>

<video className="overflow-hidden w-full m-auto" autoPlay loop muted  >
      <source src="/cinematography/landing-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
<div className=" capturinglife absolute w-auto text-9xl bold text-right ">
  LIFE<br></br>CAPTURED
  <p className='text-5xl'>-IN MOTION AND STILLNESS-</p> 
</div>

  </div>
  )
}

export default Landing
