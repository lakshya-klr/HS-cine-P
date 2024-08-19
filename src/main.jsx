import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './Landing.jsx'
import Nav from './Nav.jsx'
import Menu from './Menu.jsx'
import Secondpage from './Secondpage.jsx'

createRoot(document.getElementById('root')).render(
  <>
  
  <Menu/>
    <Nav/>
<Landing/>
<Secondpage/>

    {/* <App /> */}
 {/* <Okay/> */}
  </>,
)
