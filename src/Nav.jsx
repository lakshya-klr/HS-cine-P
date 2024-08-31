import React, { useState } from 'react';
// import { Pivot as Hamburger } from 'hamburger-react';
// import Menu from './Menu';

// const [isOpen, setOpen] = useState(false)




const Nav = () => {


  return (
<>
    <div className='navbar  h-12 flex rounded-3xl overflow-hidden justify-between px-4 backdrop-blur-3xl z-10'>
      
      <div className="py-1 h-full w-2/4 flex">
        <img className="h-full fullwidthimage" src="/images/1723990439104.png" alt="Cropped Name" />
        <img className="h-full mobileimage" src="/images/initials.png" alt="Initials" />
      </div>
      <div

        className=' h-full w-20 rounded-full menubutton'
      >
<a href="https://linktr.ee/Harshitsonii10" target="_blank">Linktree</a>

      </div>
      <div className="rightbox right w-2/6">
        <ul className='flex h-full justify-between'>
          <li className='h-full flex justify-center items-center navlistitem'><a href="https://linktr.ee/Harshitsonii10" target="_blank">Linktree</a></li>
          <li className='h-full flex justify-center items-center navlistitem'><a href="https://www.instagram.com/harshit_soni_10?igsh=anl2OWxjZDlzZTNl&utm_source=qr" target="_blank">Instagram</a></li>
          <li className='h-full flex justify-center items-center navlistitem'><a href="https://www.linkedin.com/in/harshit-soni-797923280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a></li>
          <li className='h-full flex justify-center items-center navlistitem'><a href="https://youtube.com/@harshitsoni2745?si=uDxExMyHDotAVqcA" target="_blank">Youtube</a></li>
        </ul>
      </div>
     
    </div>
    
   </> 
  );
};

export default Nav;
