import React, { useState, useEffect } from "react";
import ProductList from "../../components/ProductList";
import { MakeupService } from "../../API/MakeUpService";
import SearchPanel from "../../components/SearchPanel";
import { useSearchProducts } from "../../hooks/useSearchProducts";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../components/UI/Loader/Loader";

import "./Makeup.scss";
import Home from "../Home/Home";

const Makeup = () => {

    let [products, setProducts] = useState([]);
    let [searchQuery, setSearchQuery] = useState("");

    let [fetchProducts, isLoading, error] = useFetching(async () => {
        const response = await MakeupService.getAllRandomCategory();
        setProducts(response.data);
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const getSearchProducts = useSearchProducts(products, searchQuery);

    return (
        <div className='makeup_page'>
            <Home></Home>
            <hr style={{marginBottom: '5em'}}/>
            <div className='search_prList'>
                <SearchPanel
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setProducts={setProducts}
                />
                {isLoading === true ? (
                    <Loader />
                ) : (
                    <ProductList products={getSearchProducts} />
                )}
                {error && <div>Error : {error}</div>}
                <div className='ad'>Here can be your ad</div>
            </div>
        </div>
    );
};
export default Makeup;
