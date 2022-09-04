import React, { useContext, useEffect } from 'react'
import { CartProductsContext } from '../context';
import { useState } from 'react';
import MakeButton from './UI/button/MakeButton';

import '../styles/MiniCartModal.scss';
import ModalProduct from './ModalProduct';

const ModalWindow = ({...props}) => {
	let { cartProducts, setCartProducts } = useContext(CartProductsContext)
	
	let [productsInfo, setProductsInfo] = useState({
        total: 0,
    });

	useEffect(() =>{
		setStates();
	},[cartProducts])

	const setStates = () =>{
        let totalValue = 0
        cartProducts.forEach(product => {
            totalValue += parseFloat(product.price) 
        })

        setProductsInfo({
            total: totalValue
        });
    }
	
	return(
		<div {...props} className='modal-window'>
			{cartProducts.length > 0 
				? cartProducts.map((product) => {
					return(
						
						<div>
							<ModalProduct product={product}/>
						</div>
					)
				})	
				: <h2 style={{textAlign: 'center'}}>Out of products</h2>
			}

			<hr />

			<div className='mc-info'>
				<strong>Total: </strong>
				<label>{productsInfo.total}</label>
			</div>
		</div>
	)
}
export default ModalWindow