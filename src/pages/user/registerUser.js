import React, {Component} from 'react'

import {Navbar} from '../../components/navbar'
import {InputUser} from '../../components/inputUser'


export class RegisterUser extends Component{
    render(){
        return(
            <div className='RegisterUser'>
                <Navbar/>

                <h3 className='txt-title'>Registrar Usuario</h3>

                <InputUser/>


            </div>
        )
    }
}