import { useState } from "react";
export const SearchBar = ({ restaurantsData, setRestaurantsData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchItem(e) {
        setSearchTerm(e.target.value);
        const filteredRestaurants = restaurantsData.filter((rest) => {
            return rest.strMeal.includes(e.target.value);
        });
        setRestaurantsData(filteredRestaurants);
    }

    function searchItem() {
        console.log("searching for the term" + searchTerm);
    }


    return (
        <div style={{ display: 'flex' }}>
            <input type='text' placeholder="Type to search" value={searchTerm}
                onChange={handleSearchItem}>
            </input>
            <button onClick={searchItem}>Search Button</button>
        </div>
    )
};