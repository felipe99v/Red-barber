import React from 'react'
import {Link} from 'react-router-dom'


export const Login = ()=>(
    <form className="form-inline">
        <div className="row">
            
            <div className="col">
              <Link className="btn btn-outline-success" to={'/inicio'}>Inicio </Link>  
            </div>

            <div className="col">
                <Link className="btn btn-outline-success" to={'/registerUser'}>Registrarse</Link>  
            </div>

        </div>
        
    </form>
)