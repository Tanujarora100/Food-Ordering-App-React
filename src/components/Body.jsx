

import { SearchBar } from "./SearchBar";
import axios from "axios";
import { MENU_API } from "../utils/constants";
import { useEffect } from "react";


const Body = () => {
  let restaurantList = null;

  useEffect(() => {
    getRestaurants();
  }, [])

  const getRestaurants = async () => {
    try {
      const data = await axios.get(MENU_API);
      // const jsonData = await data.json();
      console.log('data:', data);

      const checkData = async (jsonData) => {
        for (let i = 0; i < jsonData.data.cards.length; i++) {
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          if (checkData !== undefined)
            return checkData;
          // console.log(data);
        }
      }

      const validatedData = await checkData(jsonData);
      console.log('validatedData:', validatedData);
      restaurantList = validatedData;
    }
    catch (err) {
      console.error("Error while fetching the data");
    }
  }
  return (
    <>
      <SearchBar restList={restaurantList}></SearchBar>

    </>
  );
};

export default Body;