import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import PBlack from "../../assets/produit/black.png";
import PGreen from "../../assets/produit/green.png";
import PKaki from "../../assets/produit/kaki.png";
import PLight from "../../assets/produit/light.png";

const Product: FunctionComponent = () => {
  const products = [
    {
      id: 1,
      img: PBlack,
      name: "Dunk Low Black White",
      brand: "Nike",
      price: 165.0,
    },
    {
      id: 2,
      img: PGreen,
      name: "Dunk Low Black White",
      brand: "Nike",
      price: 165.0,
    },
    {
      id: 3,
      img: PKaki,
      name: "Dunk Low Black White",
      brand: "Nike",
      price: 165.0,
    },
    {
      id: 4,
      img: PLight,
      name: "Dunk Low Black White",
      brand: "Nike",
      price: 165.0,
    },
  ];

  const { id } = useParams();

  if (!id) {
    return <div>ERROR</div>;
  }

  return (
    <div>
      {products
        .filter((product) => product.id === parseInt(id))
        .map((product, index) => (
          <div key={index}>
            <img src={product.img} alt={product.name} />
            <h1>{product.name}</h1>
            <h2>{product.brand}</h2>
            <h3>{product.price}</h3>
          </div>
        ))}
    </div>
  );
};

export default Product;
