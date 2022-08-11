import React, { useState, useEffect } from "react";

import MakeInput from "./UI/input/MakeInput";
import MakeSelect from "./UI/select/MakeSelect";
import { brandsData, typesData } from "../utils/categoryTagsData";
import { MakeupService } from "../API/MakeUpService";

import "../styles/SearchPanel.scss";


const SearchPanel = ({ searchQuery, setSearchQuery, setProducts }) => {
    let [categories, setCategories] = useState([]);

    const setType = async (typeName) => {
        const typeCategories = typesData.filter((type) => {
            return type.value === typeName;
        })[0].categories;

        setCategories(typeCategories);

		const response = await MakeupService.getAllType(typeName);
        setProducts(response.data);

    };

    const setCategory = async (categoryName) => {
        const response = await MakeupService.getCategory(categoryName);
        setProducts(response.data);
    };

    const setBrand = async (brand) => {
        const response = await MakeupService.getBrand(brand);
        setProducts(response.data);
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
