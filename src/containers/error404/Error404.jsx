import React from 'react'
import './error404.css';
import { Outlet} from "react-router-dom";
import {Footer, ErrorDisplay} from '../index'


const error404 = () => {
  return (
    <>
      <ErrorDisplay 
        errorNumber="404"
        errorText="Oups! La page que vous demandez n'existe pas."
      />
      <Footer />
      <Outlet/>
    </>
    
        
  )
}

export default error404