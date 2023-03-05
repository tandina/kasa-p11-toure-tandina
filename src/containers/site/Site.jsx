import React, { Component } from 'react';
import {Home,House,Error404,About} from '../index'
import {Navbar} from '../../components/index'
import {Routes,Route, useParams} from 'react-router-dom';
import liste from '../../datas/kasadata.json';

function HouseIdCheck() {
  const { id } = useParams()
  let houseId = liste.find(obj => obj.id=== id)

  if (!houseId) {
    return <Error404 />;
  }
  return <House element={<House/>} />;
}

  class Site extends Component {
    render() {
        return (<>

          <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/house/:id" element={<HouseIdCheck/>}/>
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div> 
          </>
        );
    }
}

export default Site;