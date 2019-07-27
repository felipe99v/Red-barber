import React from 'react'

export const InputUser = ()=>(
    <div className='container '>

        <div className='row'>
            <div className='col-6'>
                <label>Nombre*</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control " placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1"/>
                </div>

            </div>

            <div className='col-6'>
                <label>Apellido*</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" aria-describedby="basic-addon1"/>
                </div>

            </div>

        </div>

        <div className='row'>
            <div className='col-6'>
                <label>Correo*</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control " placeholder="Correo" aria-label="Nombre" aria-describedby="basic-addon1"/>
                </div>

            </div>

            <div className='col-6'>
                <label>Constraseña*</label>
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Contraseña" aria-label="Apellido" aria-describedby="basic-addon1"/>
                </div>

            </div>

        </div>

        <div className='row'>
            <div className='col-6'>
            </div>

            <div className='col-6'>
                <label>Repita Contraseña*</label>
                <div class="input-group">
                    <input type="password" class="form-control" placeholder="Repita Contraseña" aria-label="Apellido" aria-describedby="basic-addon1"/>
                </div>

            </div>

        </div>


        <div className='row'>
            <div className='col-6'>
                <label>Numero Movil*</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control " placeholder="Numero Movil" aria-label="Nombre" aria-describedby="basic-addon1"/>
                </div>

            </div>

            <div className='col-6'>
                <label>Direccion*</label>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Direccion" aria-label="Apellido" aria-describedby="basic-addon1"/>
                </div>

            </div>

        </div>

        <div className='row'>
            <div className='col-6'>
                <label>Edad*</label>
                <div class="input-group mb-3">
                    <input type="text" class="form-control " placeholder="Edad Actual" aria-label="Nombre" aria-describedby="basic-addon1"/>
                </div>

            </div>

            <div className='col-6'>


            </div>

        </div>

        <div className='row'>
            <div className='col-6'>
            <label>Foto</label>
                <div class="input-group mb-3">

                    <div class="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                        <label className="custom-file-label" for="inputGroupFile01">Seleccionar una Foto</label>
                    </div>
                </div>

            </div>

            <div className='col-6'>


            </div>

        </div>

        <div className='row justify-content-end wrapper-botton'>
            <div className='col-10'>

                <button type="button" className="btn btn-primary btn-sm">Guardar</button>

            </div>

            <div className='col-10'></div>
            
        </div>

        

    </div>
)