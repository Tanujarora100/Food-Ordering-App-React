
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

export const SearchBar = ({ restList }) => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restList);
    //Maintain the original state here
    const [originalRestaurants, setOriginalRestaurants] = useState(restList);
    function handleSearch(searchText, restaurants) {
        if (searchText.length === 0) {
            setRestaurants(originalRestaurants);
        }

        else {
            const filterData = restaurants.filter((restaurant) =>
                restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setRestaurants(filterData);
        }

    }

    useEffect(() => {
        setRestaurants(restList);
        //As the restlist is a dependency here and in case it is changed, i need to change both the states here.
        setOriginalRestaurants(restList);
    }, [restList])



    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search a restaurant..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="search-btn" onClick={() => handleSearch(searchText, restaurants)}>
                    Search
                </button>

            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return (
                        <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                    );
                })}
            </div>
        </>
    );
}; 
