import React, {FunctionComponent} from 'react'
import { NavLink } from 'react-router-dom';

const Authentifcation  : FunctionComponent = () => {
    return (
        <div className='authentification'>
            <button className='authentification-btn-login btn'><NavLink className='link' to={"/login"}>Connexion</NavLink></button>
            <button className='authentification-btn-register btn'><NavLink className='link' to={"/register"}>Inscription</NavLink></button>
        </div>
    );
};

export default Authentifcation;