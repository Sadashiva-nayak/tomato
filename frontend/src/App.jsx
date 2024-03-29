import React, { useState ,useEffect,useRef} from 'react'
import Navbar from './components/navbar'
import { Route , Routes } from 'react-router-dom'
import Placeorder from './pages/Placeorder'
import Cart from './pages/cart'
import Home from './pages/home'
import Footer from './components/Footer'
import Login from './components/Login'
import Alert from './components/Alert';
import { motion , useInView ,useAnimation} from "framer-motion";

const App = () => {
  const [curstate,setcurstate]=useState("sign up");
  const [alert,setAlert]=useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 2000);
}
  const ref= useRef(null);
  const inview = useInView(ref, {once:true});
  const maincontrols = useAnimation();

  useEffect(()=>{
    if(inview){
      maincontrols.start("visible");
    }
  },[inview]);

  return (
    <div ref={ref}>
      <motion.div
      variants={{
        hidden:{opacity:0,y:300},
        visible:{opacity:1,y:0}
      }}
      initial="hidden"
      animate={maincontrols}
      transition={{duration:1,delay:0.25}}
      >
     <Alert alert={alert} />
    {localStorage.getItem('token')?<></>:<Login curstate={curstate} setcurstate={setcurstate} showAlert={showAlert}/>}
    <div className='w-[80%] m-auto'>
    <Navbar curstate={curstate} setcurstate={setcurstate}/>
    <Routes>
      <Route path='/' element={<Home curstate={curstate} setcurstate={setcurstate}/>} />
      <Route path='/cart' element={<Cart showAlert={showAlert}/>} />
      <Route path='/order' element={<Placeorder showAlert={showAlert}/>} />
    </Routes>
    </div>
    <Footer/>
    </motion.div>
    </div>
  )
}

export default App
