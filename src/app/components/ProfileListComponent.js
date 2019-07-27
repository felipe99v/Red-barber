import React from 'react'
import '../styles/ProfileList.css'

class ProfileList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {this.props.profiles.map(profile => {
                    return(
                        <li key={profile.id} className='Profile__section-name-list'>

               <div class="row">
                     <div class="col-sm-3">
                       <div class="card">
                       <div class="card-body">
                        <img className='Profile__avatar-list' src={profile.image}/>
                          <div class="card-body">
                                 <h5 class="card-title">{profile.name}</h5>
                  <p class="card-text"> {profile.origin.name}</p>
                  <p class="card-text"> {profile.status}</p>
                        <a href="#" class="btn btn-primary">Mas detalles</a>
                                  </div>
                                        </div> 
                                        </div> 
                                        </div> 
                                        </div>

                                        
                        </li>
                    )
                })}
            </ul>    
        )    
    }
}

export default ProfileList;