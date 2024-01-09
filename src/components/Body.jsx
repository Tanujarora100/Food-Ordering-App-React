import { restaurantList } from "../utils/constants";

import { SearchBar } from "./SearchBar";
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  
  return (
    <>
    <SearchBar restList={restaurantList}></SearchBar>
      
    </>
  );
};

export default Body;