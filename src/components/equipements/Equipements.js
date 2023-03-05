import React from "react";
import { useParams} from "react-router-dom";
import liste from '../../datas/kasadata.json';

export default function Equipments(props) {
    const {id} = useParams()

    const houseClicked = liste.findIndex(obj => obj.id=== id)
    console.log(houseClicked);

    return (
        liste[houseClicked].equipments.map((item,index) => {
            return (
                <div key={index} className='house__info--loop' >
                    <p key={index}>{item}</p>
                </div>
                );
      }));
    };
