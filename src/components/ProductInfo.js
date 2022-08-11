import React, { useEffect, useState } from "react";

import "../styles/ProductInfo.scss";
import MakeButton from "./UI/MakeButton/MakeButton";
import {Link} from 'react-router-dom'

const ProductInfo = ({ product }) => {
    console.log(product);

    return (
        <div className="product_info">
            <h1>{product.name}</h1>

            <hr />
            <div className='product_base_info'>
                <img src={product.api_featured_image}></img>
                <span>Brand: {product.brand}</span>
                <span>
                    Price: {product.price_sign}
                    {product.price}
                </span>
                {product.rating 
                    ? <span>Star rating: {product.rating}</span>
                    : <span>Star rating: unrated</span>
                }
                <a href={product.product_link}>
                    <MakeButton>Buy Now</MakeButton>
                </a>
            </div>
            <hr />
            <div className='product_colors_info'>
                {product.product_colors &&
                    product.product_colors.map((color) => {
                        return (
                            <div className='color_container'>
                                <div
                                    className='color_hex'
                                    style={{
                                        backgroundColor: `${color.hex_value}`,
                                    }}></div>
                                <span>{color.colour_name}</span>
                            </div>
                        );
                    })}
            </div>
            <hr />
            <div className='description_tags'>
                <span>
                    <strong>Description:</strong>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: product.description,
                        }}
                    />
                </span><br/>
                <span>
                    <strong>Tags: </strong>
                    <ul>
                        {product.tag_list &&
                            product.tag_list.map((tag) => {
                                return <li>{tag}</li>
                            })}
                    </ul>
                </span>
            </div>
            <hr/>
            <Link to={'/products'}>
                <MakeButton>Back</MakeButton>
            </Link>
        </div>
    );
};
export default ProductInfo;
