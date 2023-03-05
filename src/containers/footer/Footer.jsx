import React from 'react'
import './footer.css';
import LOGO from "../../assets/images/LOGO.svg"

const Footer = (props) => {
  let newDate = new Date()
  let year = newDate.getFullYear();
  return (
    <div className='kasa__footer'>
      <div className='kasa__footer-logo'>
        <img src={LOGO} alt="header" />
      </div>
      <div className='kasa__footer-text font50012'>
        <p>© {year} Kasa. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer