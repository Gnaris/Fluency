import React, { FunctionComponent } from 'react';
import { useParams } from 'react-router-dom';

const Product : FunctionComponent = () => {

    const {id} = useParams();


    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default Product;