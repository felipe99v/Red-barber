import React,{Component} from 'react'

//Components
import {ItemNavbar} from "./item-navbar"
import {Login} from './btn-login'

export class Navbar extends Component{
    render(){
        return(

            <div className="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <div className="container">

                        <div className="row">
                             <a className="navbar-brand" href="#">RED BARBER</a>
                            <div className="col-sm">
                            <ItemNavbar/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm">
                                <Login/>
                            </div>
                        </div>
                </div>
                </nav>
            </div>

        )
    }
}