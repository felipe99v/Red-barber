import React from 'react'

export const TableService = ()=>(
    <div className='container wrapper-service'>
    <div className='row'>
    <div className='col'>
        <h2>Servicios</h2>

        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Nombre de Servicio</th>
                <th scope="col">Precio</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>Corte de cabello</td>
                    <td>$20.000 COP</td>
                </tr>

                <tr>
                    <td>Depilacion de Cejas</td>
                    <td>$5.000 COP</td>
                </tr>

                <tr>
                    <td>Rastas</td>
                    <td>$60.000 COP</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

</div>
)