import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import axios from "axios";

export function BodyLayout() {
  const [mealData, setMealData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        console.log(response);
        setMealData(response.data.meals);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="search">Search</div>
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
