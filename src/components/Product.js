import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/Product.scss';

const Product = ({product}) => {
	return(
		<div className='product_card'>
			<Link to={`/products/${product.id}`}>	
				<img src={product.api_featured_image}></img>
				<div className='product-card-info'>
					<span>{product.brand}</span>
					<span>{product.name}</span>
					{product.category && 
						<span>Category: <span>{product.category}</span></span>
					}
					
					{product.price_sign 
						?	<p>{product.price_sign}{product.price}</p>
						:	<p>${product.price}</p>
					}
					
					{product.rating &&
						<p><i className="fa-regular fa-star"></i>{product.rating}</p>
					}
				
					<div className='product-card-colors'>
					{product.product_colors &&
						product.product_colors.map((color)=>{
							return <div key={Math.random()} className='card-color' style={{backgroundColor: `${color.hex_value}`}}></div>
						})
					}
					</div>
				</div>
			</Link>
		</div>
	)
}
export default Product