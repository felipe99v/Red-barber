//Paquete React
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'

//Pages
import {Home} from './pages/home'
import {Inicio} from './pages/user/inicio'
import {DetailUser} from './pages/user/detailUser'
import {RegisterUser} from './pages/user/registerUser'
import {UpdateUser} from './pages/user/updateUser'
import {DetailBarber} from './pages/detail-barber/detailBarber'
import {NotFound} from './pages/notFound'

//Estilos CSS
// import './App.css'

//require('bootstrap')
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import 'jquery/dist/jquery.min.js'
// import 'popper.js/dist/popper.min.js'

// require('bootstrap')
// require('jquery')
// require('popper.js')

//Librerias


//import '../../node_modules/popper.js/dist/umd/popper.min.js'
//import '../../node_modules/jquery/dist/jquery.min.js'
//import '../../node_modules/bootstrap/dist/js/bootstrap.min.js'
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'




class App extends Component {

    render() {

        return (
        < div className="App" >
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/inicio' component={Inicio}/>
                <Route exact path='/registerUser' component={RegisterUser}/>
                <Route exact path='/detailUser' component={DetailUser}/>
                <Route exact path='/updateUser' component={UpdateUser}/>
                <Route exact path='/detailBarber' component={DetailBarber}/>
                <Route component={NotFound}/>
            </Switch>
            
        </div>
        )

    }

}

export default App;