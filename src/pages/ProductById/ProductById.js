import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom';
import { MakeupService } from '../../API/MakeUpService';
import ProductInfo from '../../components/ProductInfo';
import Loader from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';


import './ProductById.scss'

const ProductById = () => {
	const params = useParams();
	
	let [product, setProduct] = useState({})

	let [fetchProduct, isLoading, error] = useFetching(async () =>{
		const response = await MakeupService.getById(params.id);
		setProduct(response.data);
	})

	useEffect(() =>{
		fetchProduct();
	}, [])

	return(
		<div className='product_info_page'>
			{isLoading === true
				?	<Loader/>
				:	<ProductInfo product={product}/>
			}
		</div>
	)
}
export default ProductById