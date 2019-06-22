import React, {Component} from 'react'

import {Navbar} from '../../components/navbar'
import {TableService} from '../../components/table-service'
import {CommentUser} from '../../components/comment-user'
import {CardDetailBarber} from '../../components/cards-detailsBarber'



export class DetailBarber extends Component{
    render(){

        return(
            
            <div className='DetailBarber'>
                <Navbar></Navbar>
                <h3 className='txt-title'>Detalles de la Barberia</h3>

                <CardDetailBarber/>

                <TableService/>

                <CommentUser/>

            </div>
        
        )
    }
}