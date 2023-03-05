import React, {Component } from 'react';
import './kasaGalery.css';
import Data from '../../datas/kasadata.json';
import { Link } from 'react-router-dom';

class KasaGalery extends Component  {
  render() {

    return (
      <div className='KasaGalery__container'>
      {Data.map((house,index) =>{
        return (
            <div className='KasaGalery__container-thumb'key={house.id}><Link to={`/house/${house.id}`}>
              <div className='KasaGalery__container-thumb_img'>
              <img src={house.cover} alt="appartement" />
              </div>
              <div className='KasaGalery__container-thumb_text font50018'>
                <p>{house.title}</p>
              </div>
              </Link>
            </div>
            
        )
      })}
          
      </div>
    )
  }
  }
  export default KasaGalery;