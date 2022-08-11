import React, { useState, useEffect } from "react";

import MakeInput from "./UI/input/MakeInput";
import MakeSelect from "./UI/select/MakeSelect";
import { brandsData, typesData } from "../utils/categoryTagsData";
import { MakeupService } from "../API/MakeUpService";
import {useQuery} from '../hooks/useQuery';
import { useNavigate, useLocation } from 'react-router-dom';

import "../styles/SearchPanel.scss";


const SearchPanel = ({ searchQuery, setSearchQuery, setProducts }) => {
    let navigate = useNavigate();
    let location = useLocation()
    
    let [categories, setCategories] = useState([]);
    let [url, setUrl] = useState(location.pathname + location.search);
    console.log(url);

    let query = useQuery().entries().next()
    console.log(query);

    // let query = useQuery();
    // console.log(query.get('test'));

    const setType = async (typeName) => {
        const typeCategories = typesData.filter((type) => {
            return type.value === typeName;
        })[0].categories;

        setCategories(typeCategories);

		const response = await MakeupService.getAllType(typeName);
        setProducts(response.data);

        if(url.includes('type')){
            navigate('/products' + `?type=${typeName}`)
        }
        else if(url.includes('?')){
            navigate( url + `&type=${typeName}`)
        }
        else{
            navigate( url + `?type=${typeName}`)
        }

        setUrl(location.pathname + location.search)
    };

    const setCategory = async (categoryName) => {
        const response = await MakeupService.getCategory(categoryName);
        setProducts(response.data);

        navigate(url + `&category=${categoryName}`)

        if(url.includes('&category')){

        }
        
        setUrl(location.pathname + location.search)
    };

    const setBrand = async (brand) => {
        const response = await MakeupService.getBrand(brand);
        setProducts(response.data);

        if(url.includes('?')){
            navigate(url + `&brand=${brand}`)
        }
        else{
            navigate(url + `?brand=${brand}`)
        }

        setUrl(location.pathname + location.search)
    };


    return (
        <div className='search_panel'>
            <h2>Search Panel</h2>
            <MakeInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={"Search"}
            />
            <MakeSelect
                options={typesData}
                setValue={setType}
                defaultOption={"Types"}
            />
            {categories.length !== 0 && (
                <MakeSelect
                    options={categories}
                    defaultOption={"Categories"}
                    setValue={setCategory}
                />
            )}
            <MakeSelect
                options={brandsData}
                defaultOption={"Brands"}
                setValue={setBrand}
            />
        </div>
    );
};
export default SearchPanel;
