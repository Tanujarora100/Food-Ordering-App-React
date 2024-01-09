import axios from "axios";
import { useState, useEffect } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import { PRODUCT_API_LOADER } from "../../utils/constants";
import { ShimmerProductCard } from "../ShimmerCard/ShimmerCard";
import ContainedButtons from "../SearchButton/SearchButton";

export const SearchBar = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getProducts = async () => {
        try {
            const response = await axios.get(PRODUCT_API_LOADER);
            setProducts(response.data);
            setIsLoading(false);
        } catch (err) {
            console.log("Error during fetching:", err);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <input type="text" placeholder="Search" />
            <div className="product-card-container">
                {isLoading ? (
                    <ShimmerProductCard></ShimmerProductCard>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))
                )}
            </div>
            <ContainedButtons>Click to Search</ContainedButtons>
        </>
    );
};
