import React, { useState } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import Menu from './Menu';

// const [isOpen, setOpen] = useState(false)




const Nav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuButtonClick = () => {
    setIsMenuVisible(prevState => !prevState);
    console.log("Menu button clicked. Menu visibility:", !isMenuVisible);
  };

  return (
<>
    <div className='navbar  h-12 flex rounded-3xl overflow-hidden justify-between px-4 backdrop-blur-3xl z-10'>
      
      <div className="py-1 h-full w-2/4 flex">
        <img className="h-full fullwidthimage" src="/images/1723990439104.png" alt="Cropped Name" />
        <img className="h-full mobileimage" src="/images/initials.png" alt="Initials" />
      </div>
      <div
        onClick={handleMenuButtonClick}
        className=' h-full w-20 rounded-full menubutton'
      >
MENU

      </div>
      <div className="rightbox right w-2/6">
        <ul className='flex h-full justify-between'>
          <li className='h-full flex justify-center items-center navlistitem'>HOME</li>
          <li className='h-full flex justify-center items-center navlistitem'>ABOUT</li>
          <li className='h-full flex justify-center items-center navlistitem'>WORK</li>
          <li className='h-full flex justify-center items-center navlistitem'>CONTACT</li>
        </ul>
      </div>
     
    </div>
     <div
     id="menu"
     className={`menu h-full  flex justify-center items-center w-full absolute ${isMenuVisible ? "up" : ""}`}>
     <div className='w-3/4'>
      <ul>
        <li className='menulistitem text-xl font-bold  p-4 rounded-xl mb-4 '>HOME</li>
        <li className='menulistitem text-xl font-bold  p-4 rounded-xl mb-4 '>CONTACT</li>
        <li className='menulistitem text-xl font-bold  p-4 rounded-xl mb-4 '>ABOUT</li>
        <li className='menulistitem text-xl font-bold  p-4 rounded-xl mb-4 '>WORK</li>
      </ul>
     </div>
   </div></>
  );
};

export default Nav;
