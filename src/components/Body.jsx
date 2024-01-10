

import { SearchBar } from "./SearchBar";
// import axios from "axios";
import { MENU_API } from "../utils/constants";
import { useState,useEffect } from "react";


const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, [])

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(MENU_API)
      const json = await response.json();
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          // initialize checkData for Swiggy Restaurant data
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(json);

      console.log(resData);
      setRestaurantList(resData);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SearchBar restList={restaurantList}></SearchBar>
    </>
  );
};

export default Body;