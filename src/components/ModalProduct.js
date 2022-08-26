import React from "react";

import '../styles/ModalProduct.scss'

const ModalProduct = ({ product }) => {
    return (
        <div className='mc-product'>
            <img src={product.api_featured_image} />
            <div>
                <label>{product.name}</label>
                <label>{product.brand}</label>
                <label>{product.price}</label>
            </div>
        </div>
    );
};
export default ModalProduct;
