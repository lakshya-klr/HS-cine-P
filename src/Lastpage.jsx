import React from 'react'


const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};


const Lastpage = () => {
  return (
    <div className=' lastpage h-screen object-cover new-amsterdam-regular'>

      <div className="imgcont h-5/6 w-full">

      <img className="h-full w-full" src="public\images\bannercopy.png" alt="" />

      </div>

      <div className=' footer flex items-center  h-1/6 '>
      
        <div className="leftthree w-1/4">	&#169; 2024 WCFS.</div>
        <div className="midthree w-2/4 rounded-3xl">

        <ul className=' zipzap w-3/4 m-auto rounded-3xl flex justify-center'>
 
          <li className='m-4 p-2'><a href="https://linktr.ee/Harshitsonii10" target="_blank">Linktree</a></li>
          <li className='m-4 p-2'><a href="https://www.instagram.com/harshit_soni_10?igsh=anl2OWxjZDlzZTNl&utm_source=qr" target="_blank">Instagram</a></li>
          <li className='m-4 p-2'><a href="https://www.linkedin.com/in/harshit-soni-797923280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">LinkedIn</a></li>
          <li className='m-4 highlight p-2 rounded-2xl' >

          <Mailto email="harshit0489@gmail.com" subject="Hello & Welcome" body="Hello world!">
    Lets connect
  </Mailto>

          </li>
        </ul>

        </div>
        <div className="w-1/4 text-end rightthree p-4">DESIGNEd & DEVELOPEd  by- <a href="https://lakshya-klr.github.io/UI-portfolio/" target="_blank">LAKSHYA KALRA</a> </div>
      
      </div>

    </div>
  )
}

export default Lastpage