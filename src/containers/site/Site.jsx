import React, { Component } from 'react';
import {Home,House,Error404,About} from '../index'
import {Navbar} from '../../components/index'
import {Routes,Route} from 'react-router-dom';


  class Site extends Component {
    render() {
        return (<>

          <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/house/:id" element={<House/>}/>
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </div> 
          </>
        );
    }
}

export default Site;