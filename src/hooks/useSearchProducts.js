import { useMemo } from "react"

export const useSearchProducts = (products, searchQuery) =>{
	const getSearchProducts = useMemo(() =>{
		return products.filter((product) =>{return product.name.toLowerCase().includes(searchQuery.toLowerCase())})
	}, [searchQuery, products])

	return getSearchProducts;
}
