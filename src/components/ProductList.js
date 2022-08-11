import React, { useEffect, useState } from 'react'
import { MakeupService } from '../API/MakeUpService';

import '../styles/ProductList.scss'
import Product from './Product'

const ProductList = ({products}) => {
	
	return(
		<div className='product_list'>
			{products.map((product) =>{
				return <Product key={product.id} product={product}/>
			})}
		</div>
	)
}
export default ProductList