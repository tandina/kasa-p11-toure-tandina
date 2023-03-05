import React from 'react'
import './header.css';

const Header = props => {
  return (
    <>
      <div className='kasa__header font50024 kasa__mobile'>
        <div className='kasa__header-imgContainer '><img src={props.img} alt="header" /></div>
        <div className='kasa__header-texte font50024 position-text-mobile'>{props.headerText}</div>
      </div>
    </>
  )
}

export default Header