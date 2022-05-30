import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Navigation : FunctionComponent = () => {

    const navs : {path : string, name : string}[] =  [
        {path : "/", name : "Accueil"},
        {path : "/sneakers", name : "Sneakers"},
        {path : "/news", name : "Actualités"},
        {path : "/about", name : "À Propos"},
        {path : "/help", name : "Aide"}
    ]

    return (
        <nav>
            {navs.map((nav, index) => <NavLink className={"link"} key={index} to={nav.path}>{nav.name}</NavLink>)}
        </nav>
    );
};

export default Navigation;