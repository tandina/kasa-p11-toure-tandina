import React, {useState} from "react";
import { useParams} from "react-router-dom";
import liste from '../../datas/kasadata.json';
import "./imageDiapo.css"
import BtnDiapo from "./BtnDiapo";

export default function Equipments(props) {
    const {id} = useParams()

    const houseClicked = liste.findIndex(obj => obj.id=== id)
    console.log(houseClicked);
    const [slideAnim,setSlideAnim] = useState({
        index:1,
        inProgress:false
    })
    console.log(liste[houseClicked].pictures.length)
    const nextSlide = () => {
       
        if(slideAnim.index !== liste[houseClicked].pictures.length && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index + 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            }, 400)

        }
        else if (slideAnim.index === liste[houseClicked].pictures.length && !slideAnim.inProgress){

            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  1, inProgress: false})
            }, 400)
        }

    }

    const prevSlide = () => {

        if(slideAnim.index !== 1 && !slideAnim.inProgress){

            setSlideAnim({index: slideAnim.index - 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  slideAnim.index - 1, inProgress: false})
            }, 400)
        }
        else if (slideAnim.index === 1 && !slideAnim.inProgress){

            setSlideAnim({index: 5, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index:  5, inProgress: false})
            }, 400)
        }
    }

    return (
        <div className="container-slider">
        {liste[houseClicked].pictures.map((item,index) => {      
                return (
                    <div 
                        className={slideAnim.index === index +1 ? 
                        "slide width100 active-anim" : "slide"} 
                        key={item.id}>
                        <img className="width100" src={item}  alt="house pictures" />
                    </div>
                );
      })}
      <BtnDiapo moveSlide={nextSlide} direction={"next"}/>
      <BtnDiapo moveSlide={prevSlide} direction={"previous"}/>
        <div className="indexShow">
            <p className="indexText font500">
               {slideAnim.index}/{liste[houseClicked].pictures.length}
            </p>
        </div>
      </div>
      )
    };
