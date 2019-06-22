import React from 'react'
import {Link} from 'react-router-dom'

export const ItemNavbar = ()=>(


<div className="ItemNavbar">
        <button className="navbar-toggler" 
        type="button" data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to={'/'}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/detailBarber'}>Barberia</Link>
                </li>

                <li className="nav-item">
                    <Link to={'/detailUser'}
                    className="nav-link"
                    tabindex="-1" aria-disabled="true">Cliente</Link>
                </li>
            </ul>
        </div>

    </div>
)