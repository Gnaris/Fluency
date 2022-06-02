import React, { FunctionComponent } from 'react';
import Header from '../../components/molecules/Header';
import Poster from "../../assets/Poster.png"
import ProductCarrousel from '../../components/molecules/ProductCarrousel';

import "swiper/css";
import "./style.css"

import PBlack from "../../assets/produit/black.png";
import PGreen from "../../assets/produit/green.png";
import PKaki from "../../assets/produit/kaki.png";
import PLight from "../../assets/produit/light.png";
import { useParams } from 'react-router-dom';

const Accueil : FunctionComponent = () => {

    const products = [
        {id : 1, img : PBlack, name : "Dunk Low Black White", brand : "Nike", price : 165.00},
        {id : 2, img : PGreen, name : "Dunk Low Black White", brand : "Nike", price : 165.00},
        {id : 3, img : PKaki, name : "Dunk Low Black White", brand : "Nike", price : 165.00},
        {id : 4, img : PLight, name : "Dunk Low Black White", brand : "Nike", price : 165.00},
    ]

    return (
        <div>
            <img className='poster' src={Poster} alt="poster" />
            <ProductCarrousel title='Nouveautés' products={products}/>
        </div>
    );
};

export default Accueil;