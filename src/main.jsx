import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './Landing.jsx'
import Nav from './Nav.jsx'
import Okay from './Okay.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <Nav/>
<Landing/>


    {/* <App /> */}
 {/* <Okay/> */}
  </>,
)
