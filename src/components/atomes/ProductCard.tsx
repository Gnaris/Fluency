import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
    id : number
    img : string,
    name : string,
    brand : string,
    price : number
}

const ProductCard : FunctionComponent<Props> = ({id, img, name, brand, price}) => {
    return (
        <NavLink to={"/sneakers/" + id}>
            <div className='product_card'>
                <img className='product_card-img' src={img} alt={name} />
                <h3 className='product_card-name'>{name}</h3>
                <p className='product_card-brand'>{brand}</p>
                <p className='product_card-price'>{price}</p>
            </div>
        </NavLink>
    );
};

export default ProductCard;