import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import { useState } from "react";
import { restaurantList } from "../../utils/constants";
function filterAccordingToRestaurantName(searchedText, restaurants) {
    if (searchedText.trim() !== '') {
        const lowercasedSearchedText = searchedText.toLowerCase();
        return restaurants.filter(restaurant => restaurant.data.name.toLowerCase().includes(lowercasedSearchedText));
    }

    return restaurants;
}
export const SearchBar = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState('')
    const renderRestaurants = () => {
        return restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ));
    };

    return (
        <div className="body">
            <div>
                <input type="text" placeholder="Search Restaurant Name"
                    onChange={(e) => setSearchText(e.target.value)}>
                </input>
                <button onClick={() => {
                    const filteredRest = filterAccordingToRestaurantName(searchText, restaurants);
                    setRestaurants(filteredRest);
                }}>Click To Search</button>
            </div>

            <div className="res-container">
                {renderRestaurants()}
            </div>
        </div>
    );
}