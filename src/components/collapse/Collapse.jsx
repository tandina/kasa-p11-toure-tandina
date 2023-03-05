import './collapse.css'
import arrowUp from "../../assets/images/arrowUp.svg"
import React, {useState} from 'react'

function Collapse(props) {
    const [open, setOpen] = useState(false);
    const handleOpen= () => {
    setOpen(!open);
    }
    return (
        <div className='wrapper'>
            <div className='wrapper__collapse'>
                <div className='wrapper__collapse--title font500'>{props.title}<img src={arrowUp} className='arrow' alt="arrow" 
                style={{
                transform: `rotate(${open ? 180 : 0}deg)`,
                transition: "all 0.25s",
                }}
                onClick={handleOpen}/></div>
                {open ? (<div className='wrapper__collapse--content font400'>
                    <ul>
                        <li>{props.content}</li>
                    </ul>
                </div>) : null}
                
            </div>

    </div>)
}
export default Collapse