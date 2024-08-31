import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Landing from './Landing.jsx'
import Nav from './Nav.jsx'
import Menu from './Menu.jsx'
import Secondpage from './Secondpage.jsx'
import Thirdpage from './Thirdpage.jsx'
import FourthPage from './FourthPage.jsx'
import FifthPage from './FifthPage.jsx'
import Lastpage from './Lastpage.jsx'
import Sixthpage from './Sixthpage.jsx'


createRoot(document.getElementById('root')).render(
  <>
  {/* <Loader/> */}
  {/* <Menu/> */}
    <Nav/>
<Landing/>
<Secondpage/>
<Thirdpage/>
<FourthPage/>
<FifthPage/>
<Sixthpage/>
<Lastpage/>

    {/* <App /> */}
 {/* <Okay/> */}
  </>,
)
