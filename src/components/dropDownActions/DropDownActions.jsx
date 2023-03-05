import React, {useState} from 'react'
import './cta.css';

const DropDownActions = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen= () => {
    setOpen(!open);
  };

  return (
    <div className='dropdown dropdown-house'>
      <button className={`dropdown-button ${props.css}`} onClick={handleOpen}>
      <div className='dropdown-text font500 dropdown-mobile '>
        <div>{props.title}</div>
        <div 
        className='material-icons'
        style={{
          transform: `rotate(${open ? 180 : 0}deg)`,
          transition: "all 0.25s",
        }}
        >
        expand_more</div>
      </div>
      </button>
      {open ? (<ul className={`menu ${props.cssUl}`}>
        <li className={`menu-item  menu-item-mobile font400 ${props.cssLi}`}>{props.content}</li>
      </ul>) : null}
      
  </div>
  );
};

export default DropDownActions