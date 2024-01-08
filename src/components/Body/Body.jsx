import { useEffect, useState } from "react";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";


export function BodyLayout() {
  const [mealData, setMealData] = useState([]);

  

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className>
        <button
          className="filter-button"
          onClick={() => {
            console.log("Top rated Button clicked");
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {mealData.map((meal) => (
          <RestaurantCard
            key={meal.idMeal}
            resName={meal.strMeal}
            cuisine="Not specified" // You may modify this based on the API response
            starRating="N/A" // You may modify this based on the API response
          />
        ))}
      </div>
    </div>
  );
}
