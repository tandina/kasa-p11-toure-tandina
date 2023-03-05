import React, {useState} from 'react';

export default function StarRating({count, value, 
    inactiveColor='#ddd',
    size=45,
    activeColor='#f6060', onChange}) {


  const stars = Array.from({length: 5}, () => '🟊')

  const handleChange = (value) => {
    onChange(value + 1);
  }

  return (
    <div className='star-mobile'>
      {stars.map((s, index) => {
        let style = inactiveColor;
        if (index < value) {
          style=activeColor;
        }
        return (
          <span className={"star"}  
            key={index}
            style={{color: style, width:size, height:size, fontSize: size}}
            onClick={()=>handleChange(index)}>{s}</span>
        )
      })}
      
    </div>
  )
}
