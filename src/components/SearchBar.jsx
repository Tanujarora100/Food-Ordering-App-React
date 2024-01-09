
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}
export const SearchBar = ({ restList }) => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restList);

    const handleSearch = () => {
        const data = filterData(searchText, restaurants);
        setRestaurants(data);
    };

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
                <button className="search-btn" onClick={handleSearch}>
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
