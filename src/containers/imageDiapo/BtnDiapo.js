import React from 'react'
import leftArrow from "../../assets/icones/rightArrow.svg"
import rightArrow from "../../assets/icones/leftArrow.svg"

export default function BtnDiapo({direction, moveSlide }) {

  return (
    <button 
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
        <img src={direction === "next" ? rightArrow : leftArrow} alt="fleche icone" />

    </button>
  )
}
