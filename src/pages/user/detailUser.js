import React, {Component} from 'react'
import {Navbar} from '../../components/navbar'

import {User} from '../../components/detail-user'

export class DetailUser extends Component{
    render(){
        return(
            <div className='detailUser'>

            <Navbar></Navbar>

            <h3 className='txt-title'>Detalles Cliente</h3>

            <User/>

        </div>
        )
    }
}