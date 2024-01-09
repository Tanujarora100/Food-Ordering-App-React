import React, { useState } from "react";
import { restaurantList } from "../../utils/constants";
import '../FastDelieveryButton/FastDelieveryButton.css'
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

export const DeliveryButton = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);

    const filterDataByTime = () => {
        const filteredRestaurants = restaurantList.filter(restaurant => restaurant.data.maxDeliveryTime <= 30);
        setRestaurants(filteredRestaurants);
    };

    const renderRestaurants = () => {
        return restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ));
    };

    return (
        <div >
            <div className="delivery-button">
                <button onClick={filterDataByTime}>Restaurants Under 30 Minutes</button>
            </div>

            <div className="res-container">
                {renderRestaurants()}
            </div>
        </div>
    );
};

export default DeliveryButton;
