import React from 'react'

export const  CommentUser = ()=>(
    <div className = 'container'>
        <div className="row-12 wrapper-carduser">
            <div className="col-5">
                    <img src="https://picsum.photos/50/50" alt="..." />  
            </div>

            <div className ='col-5 txt-nomuser' >
                <h6>Nombre usuario</h6>
            </div>
        </div>

        <div className='row-12'>
            <div className='col'>
                seleccionar estrellas
            </div>
        </div>

        <div className='row-12'>
            <div className='col'>

            <div class="input-group btn-txtarea">
                <textarea class="form-control" aria-label="With textarea" placeholder='Ponga tus opiniones sobre la barberia'></textarea>
            </div>

            </div>
        </div>
    </div>
)