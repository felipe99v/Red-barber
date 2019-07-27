import React, { Component } from 'react';

//Components
import {Title} from '../components/title'
import {Navbar} from '../components/navbar'
import {Footer} from '../components/footer'
import {Buscador} from '../components/buscador'
import ProfileList from '../components/ProfileListComponent';
import axios from 'axios'


export class Home extends Component {


    constructor(props){
        super(props);

        this.state = {
            listProfiles: []
        };

    }

    componentDidMount(){ 
        axios.get('https://rickandmortyapi.com/api/character/')
        .then(res =>{
            this.setState({
                listProfiles:res.data.results
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Home">
                <Navbar />
                <Title>Red Barber</Title>
                <Buscador/>

                <div className="Profiles__list">
                    <div className="Profiles_container"> 
                        <ProfileList profiles = {this.state.listProfiles} /> 
                    </div>

                </div>

            
                <Footer/>
                

            </div>
        );
    }
}
