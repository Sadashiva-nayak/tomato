import React, { useState , useContext, useEffect} from 'react'
import Header from '../components/Header'
import Exploremenu from '../components/Exploremenu'
import FoodDislplay from '../components/FoodDislplay';
import Appdownload from '../components/Appdownload';
import { StoreContext } from '../context/StoreContext'

const Home = ({curstate,setcurstate}) => {
  const [category, setcategory]= useState("all");
  const {getItems,gettotalcartamount} = useContext(StoreContext);
  useEffect(() => {
        if(localStorage.getItem('token')){
          getItems();
          gettotalcartamount();
          setcurstate("done");
        }
}, [])

  return (
    <div {...curstate=="done"?window.onscroll=()=>{null}:window.onscroll = ()=> {window.scrollTo(0, 0)}}>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDislplay category={category} />
    <Appdownload/>
    </div>
  )
}

export default Home
