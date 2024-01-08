import { useState } from "react";
export const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSearchItem(e) {
        setSearchTerm(e.target.value);

    }

    function searchItem() {
        console.log("searching for the term" + searchTerm);
    }


    return (
        <div style={{ display: 'flex' }}>
            <input type='text' placeholder="Type to search" value={searchTerm}
                onChange={handleSearchItem}>
            </input>
            <button onClick={handleSearchItem}>Search Button</button>
        </div>
    )
};