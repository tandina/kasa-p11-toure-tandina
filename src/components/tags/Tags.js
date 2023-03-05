import React from "react";
import { useParams} from "react-router-dom";
import liste from '../../datas/kasadata.json';

export default function Tags() {
    const {id} = useParams()

    const houseClicked = liste.findIndex(obj => obj.id=== id)
    console.log(houseClicked);

    return (
        liste[houseClicked].tags.map((tag,index) => {
            console.log(liste[houseClicked].tags)
            return (
                <div className='house__info--tags' key={index}>
                    <p>{tag}</p>
                </div>
                );
      }));
    };

