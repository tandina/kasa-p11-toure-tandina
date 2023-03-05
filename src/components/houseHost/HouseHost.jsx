import React from "react";
import { useParams} from "react-router-dom";
import liste from '../../datas/kasadata.json';

export default function HostName() {
    const {id} = useParams()

    const houseClicked = liste.findIndex(obj => obj.id=== id)
    const completeName =liste[houseClicked].host.name;
    
    const nameHost=completeName.split(' ');
    console.log(nameHost);
    console.log(houseClicked);

    return (
        nameHost.map((last,index) => {
            return (
                <div key={index}>
                    <p className='font500' key={index}>{last}</p>
                </div>
                
        );
      }));
    };
