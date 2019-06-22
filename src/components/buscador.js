import React,{Component} from 'react'


import "../styles/buscador.css"

export class Buscador extends Component{
    render(){
        return(

            <div className="Buscador">
            <section class="search-sec">
                        <div class="container">
                            <form action="#" method="post" novalidate="novalidate">
                                <div class="row">
                                    <div>
                                        <div className="busca-aqui">
                                        <h3>Busca tu barberia ideal</h3>
                                        </div> 
                                    </div>
                        

                                    <div class="col-lg-12">
                                        <div class="row">
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                                <input type="text" class="form-control search-slt" placeholder="Palabra clave" />
                                            </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Rando de precio</option>
                                <option>5.000-10.000</option>
                                <option>10.000-20.000</option>
                                <option>20.000-30.000</option>
                                <option>30.000-40.000</option>
                                <option>40.000-50.000</option>
                                <option>50.000-100.000</option>
                              </select>
                           </div>
                                            <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                                 <select class="form-control search-slt" id="exampleFormControlSelect1">
                                <option>Sector</option>
                                <option>Robledo</option>
                                <option>Laureles</option>
                                <option>Poblado</option>
                                <option>San javier</option>
                                <option>Belen</option>
                                <option>Manrique</option>
                                <option>Prado</option>
                                <option>Santa lucia</option>
                                <option>Buenos aires</option>
                              </select>
                           </div>
                           <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                            <button type="button" class="btn btn-dark wrn-btn">Buscar</button>
                        </div>

                                            </div>

                                        </div>

                                    </div>
                            </form>
                        </div>

                    </section>
               
            </div>

        )
    }
}