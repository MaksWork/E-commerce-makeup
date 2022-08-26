import React from "react";
import "../styles/CartProduct.scss";

import { useNavigate } from "react-router-dom";
import MakeButton from "./UI/button/MakeButton";
import { useContext } from "react";
import { CartProductsContext } from "../context";

const CartProduct = ({ product, qua}) => {
    let { cartProducts, setCartProducts } = useContext(CartProductsContext);
    let navigate = useNavigate();

    const deleteCartProduct = (e, id) => {
        e.stopPropagation();
        setCartProducts(cartProducts.filter((product) => product.id !== id));
    };

    const deleteOneProduct = () =>{
        let productIndex = cartProducts.indexOf(product);
        let cloneList = cartProducts;
        cloneList.splice(productIndex, 1);
        
        setCartProducts([...cloneList]);
    }

    const viewOfficial = (e) => {
        e.stopPropagation();
        window.location.replace(product.product_link);
    };

    return (
        <div className='cart-product'>
            <div className='cart-product-left_cl'>
                <img src={product.api_featured_image}></img>
                <div className='cart-product-info'>
                    <strong onClick={() => navigate(`/products/${product.id}`)} id='cart-product-name'>{product.name}</strong>
                    <label>{product.brand}</label>
                    <label>{product.price_sign} {product.price}</label>
                </div>
            </div>

            <div className='cart-product-right_cl'>
                <div className="cart-product-qua">
                    <MakeButton onClick={deleteOneProduct}>–</MakeButton>
                    <label>{qua}</label>
                    <MakeButton onClick={() => setCartProducts([...cartProducts, product])}>+</MakeButton>
                </div>
                <div className='cart-product-buttons'>
                    <MakeButton
                        onClick={(e) => deleteCartProduct(e, product.id)}>
                        ✖
                    </MakeButton>
                    <a href={product.product_link}>
                        <MakeButton onClick={(e) => viewOfficial(e)}>
                            View offical
                        </MakeButton>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default CartProduct;
