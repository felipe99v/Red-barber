import React from 'react'

export const User = ()=>(

<div class="container">
    <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                    <img src='https://picsum.photos/150/220' className="card-img" alt="img-default"/>
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>
                            Nombre completo</h4>
                        <small><cite title="Ciudad">Medellín <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                        <p>
                            <i class="glyphicon glyphicon-envelope"></i>email@example.com
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>Edad
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>Numero de contacto</p>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary">
                                Modificar</button>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="btn-group">
                            <button type="button" class="btn btn-danger">
                                Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

)