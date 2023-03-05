import React , {Navigate}from 'react'
import './houses.css';
import { useParams} from "react-router-dom";
import liste from '../../datas/kasadata.json';
import {Tags, HouseHost,Stars,DropDownActions, Equipments} from '../../components/index'
import {ImageDiapo,Footer} from '../../containers/index'

export default function HouseShow(props) {

  const {id} = useParams()

  const houseClicked = liste.findIndex(obj => obj.id=== id)
  

  if (!liste[houseClicked].id) {
    // Redirigez l'utilisateur vers la page d'erreur 404
    return <Navigate to="/" />;
  }
  return (
    <>
    <div className='house-container padding20'>
      <ImageDiapo />
      <div key={liste[houseClicked].id}className='house'>
        <div  className='house__info'>
          {houseClicked !== undefined && liste[houseClicked] !== undefined && (
    <div className='house__info--title font50018'>
      <p>{liste[houseClicked].title}</p>
      <p className='font500 font50014'>{liste[houseClicked].location}</p>
    </div>
    )}
          <div className='house__info--owner collapse visiblePc'>
            <div className='house__info--ownerName font50012'>
              <HouseHost />
            </div>
            <div className='house__info--ownerpic'>
              <img src={liste[houseClicked].host.picture} alt="house owner" />
            </div>
          </div>
        </div>
          <div className='house__info'>
            <div className='house__tags'>
              <Tags />
            </div>
            <div className='rowMobile'>
              <Stars 
                  value={liste[houseClicked].rating}
              />
              <div className='house__info--owner collapsePc visible'>
              <div className='house__info--ownerName font50012'>
                <HouseHost />
              </div>
              <div className='house__info--ownerpic'>
                <img src={liste[houseClicked].host.picture} alt="house owner" />
              </div>
            </div>
            </div>
            
             
          </div>
          
          <div className='house-dropdown house__info'>
          <DropDownActions 
            title="Description"
            content={liste[houseClicked].description}
          />
          <DropDownActions 
            title="Équipements"
            content=<Equipments />
          />
          </div>
          
        </div>
        
    </div>
    <Footer />
    
    </>
)

  

}
