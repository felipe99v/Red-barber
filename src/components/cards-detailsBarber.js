import React from 'react'

export const CardDetailBarber = ()=>(

    <div className="container wrapper">
        <div className='row-12'>

            <div className='col'>
                <div className="card mb-3 cointainer-card">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src='https://picsum.photos/150/220' className="card-img" alt="img-default"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Barber Shop Celebrity</h5>
                                <p className="card-text">Medellin</p>
                                <p className="card-text"><small className="text-muted">Poblado</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        

    
            <div className="col">
                <div class="card card-contact" >
                    <div class="card-body">
                        <h5 class="card-title">Franja Horaria</h5>

                        <h6 class="card-subtitle mb-2 text-muted">Lunes - Viernes</h6>
                        <p class="card-text"><span class="badge badge-primary">8:00-20:00</span></p>
                        <p class="card-text"><span class="badge badge-success">Abierto</span></p>


                        <h6 class="card-subtitle mb-2 text-muted">Sabado</h6>
                        <p class="card-text"><span class="badge badge-primary">10:00-20:00</span></p>
                        <p class="card-text"><span class="badge badge-success">Abierto</span></p>


                        <h6 class="card-subtitle mb-2 text-muted">Domingo</h6>
                        <p class="card-text"><span class="badge badge-danger">Cerrado</span></p>

                    </div>
                </div>
            </div>
        </div>


        <div className="row-12">
            <div className="col">
                <div class="card card-horaria" >
                    <div class="card-body">
                        <h5 class="card-title">Contactos</h5>

                        <h6 class="card-subtitle mb-2 text-muted">Numero Telefono</h6>
                        <p class="card-text">316-90-05</p>

                        <h6 class="card-subtitle mb-2 text-muted">Numero Celular</h6>
                        <p class="card-text">316-854-458-45</p>
                    </div>
                </div>
            </div>
        </div>

    </div>


)