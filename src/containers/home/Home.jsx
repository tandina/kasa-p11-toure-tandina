import React,{useState,useEffect} from 'react'
import './home.css';
import { Outlet} from "react-router-dom";
import {Footer, KasaGalery, Header, Loader} from '../index'
import bgImgHome from "../../assets/images/bgImgHome.png";

function App()  {
  const [loader, setLoader] = useState(true)

  useEffect(() => {

    setTimeout(() => {
      setLoader(false);
    }, 500)
  },[])
  return loader ?
  (
    <Loader />
  ):(
    <div className='App'>
      
      <Header 
        img ={bgImgHome}
        alt="background header  accueil"
        headerText="Chez vous, partout et ailleurs"
      />
      <KasaGalery />
      <Footer />
      <Outlet />
    </div>
  )
}

export default App