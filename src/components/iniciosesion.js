import React,{Component} from 'react'

import logouser from '../images/user.png';

import "../styles/inicio.css"



export class Iniciosesion extends Component{
    render(){
        return(
                    <div class="modal-dialog text-center">
                        <div class="col-sm-8 main-section">
                            <div class="modal-content">
                                <div class="col-12 user-img">
                                <img className="user_logo" src={logouser} alt="Logo usuario" />
                                </div>
                                <form class="col-12">
                                    <div class="form-group" id="user-group" >
                                        <input type="text" class="form-control" placeholder="Usuario" />
                                    </div>

                                    <div class="form-group" id="contrasena-group" >
                                        <input type="password" class="form-control" placeholder="Contraseña" />
                                    </div>
                                    <button type="submit" class="btn btn-dark"><i class="fas fa-sign-in-alt"></i>  Ingresar </button>
                                </form>
                            </div>
                        </div>
                    </div>
        )
    }
}