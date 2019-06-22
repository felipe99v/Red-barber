import React, {Component} from 'react'

//Components
import {Navbar} from "../../components/navbar"
import {Footer} from '../../components/footer'
import {Iniciosesion} from '../../components/iniciosesion'



export class Inicio extends Component{
    render() {
        return (
            <div className="Inicio">
              <Navbar/>
              <Iniciosesion/>
              <Footer/>
            </div>
            
        );
    }
}
