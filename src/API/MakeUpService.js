import axios from "axios";
import { getRandomCategory } from "../utils/productOperations";

export class MakeupService {
    static async getAll() {
        const response = await axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json"
        );

        return response;
    }

    static async getAllRandomCategory() {
        const randomCategory = getRandomCategory();

        const response = await axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json",
            {
                params: {
                    product_type: randomCategory,
                },
            }
        );
        return response;
    }

    static async getAllType(type) {
        const response = await axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json",
            {
                params: {
                    product_type: type,
                },
            }
        );
        return response;
    }

    static async getCategory(category) {
        const response = await axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json",
            {
                params: {
                    product_category: category,
                },
            }
        );
        return response;
    }

    static async getBrand(brand) {
        const response = await axios.get(
            "https://makeup-api.herokuapp.com/api/v1/products.json",
            {
                params: {
                    brand: brand,
                },
            }
        );
        return response;
    }

    static async getById(id) {
        const response = await axios.get(
            `https://makeup-api.herokuapp.com/api/v1/products/${id}.json`
        );
        return response;
    }
}
