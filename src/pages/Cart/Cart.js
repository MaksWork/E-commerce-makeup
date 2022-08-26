import React, { useContext, useEffect, useState } from "react";
import { CartProductsContext } from "../../context";

import "./Cart.scss";
import CartProduct from "../../components/CartProduct";
import MakeButton from "../../components/UI/button/MakeButton";

const Cart = () => {
    let { cartProducts } = useContext(CartProductsContext); 

    let [viewedProducts, setViewedProducts] = useState([]);
    let [productsInfo, setProductsInfo] = useState({
        tax: 0,
        qua: 0,
        total: 0,
    });

    useEffect(() => {
        setStates();
    }, [cartProducts]);

    const setStates = () =>{
        let totalValue = 0
        cartProducts.forEach(product => {
            totalValue += parseFloat(product.price) 
        })

        setProductsInfo({
            total: totalValue,
            qua: cartProducts.length,
            tax: ((21 / 100) * totalValue).toFixed(2),
        });

        setViewedProducts([...new Set(cartProducts)]);
    }

    return (
        <div className='cart_page'>
            <div className='cart-products-list'>
                <h1>Cart</h1>
                {cartProducts.length > 0 ? (
                    viewedProducts.map((product) => {
                        let repeatedProducts = cartProducts.filter((pr) => {
                            return pr.id === product.id;
                        });
                        return (
                            <CartProduct
                                key={Math.random()}
                                product={product}
                                qua={repeatedProducts.length}
                            />
                        );
                    })
                ) : (
                    <h1 style={{ marginTop: "10rem" }}>Products not found</h1>
                )}
            </div>
            <div className='cart-products-info'>
                <strong>
                    Tax 21% : <label>$ {productsInfo.tax}</label>
                </strong>
                <strong>
                    Quantity : <label>{productsInfo.qua}</label>
                </strong>
                <strong>
                    Total : <label>$ {productsInfo.total}</label>
                </strong>
                <MakeButton>Order</MakeButton>
            </div>
        </div>
    );
};
export default Cart;
