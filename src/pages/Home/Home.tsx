import React, { FunctionComponent } from 'react';
import Header from '../../components/molecules/Header';

import Poster from "../../assets/Poster.png"

import "./style.css"

const Accueil : FunctionComponent = () => {
    return (
        <div>
            <Header/>
            <img className='poster' src={Poster} alt="poster" />
        </div>
    );
};

export default Accueil;