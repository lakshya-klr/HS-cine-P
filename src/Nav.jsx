import React from 'react'

const Nav = () => {
  return (
    <div className='mt-6 navbar  h-12 flex m rounded-3xl overflow-hidden justify-between px-4  backdrop-blur-3xl Z-10'>
      <div className="py-1 h-full w-2/4 flex"><img  className="h-full fullwidthimage" src="/images/cropped-name.png"/> <img className="h-full mobileimage" src="/images/initials.png" alt="" /></div>
      
      <div className="right w-2/6">
        <ul className='flex h-full justify-between '>
          <li className='h-full  flex justify-center items-center navlistitem'>HOME</li>
          <li className='h-full  flex justify-center items-center navlistitem' >ABOUT</li>
          <li className='h-full  flex justify-center items-center navlistitem' >WORK</li>
          <li className='h-full  flex justify-center items-center navlistitem' >CONTACT</li>
        </ul>
      </div>
      
    </div>
    
  )
}

export default Nav