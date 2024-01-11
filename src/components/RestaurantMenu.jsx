import React, { useEffect } from 'react'
import { MENU_API } from '../utils/constants';
const RestaurantMenu = () => {


    const fetchMenu = async () => {
        try {
            const data = await fetch(MENU_API);
            const jsonData = await data.json();
            console.log(jsonData);
        }
        catch (err) {
            console.error(err);

        }


    }
    useEffect(() => {
        fetchMenu();
    }, [])
    return (
        <>
            <h1>Name</h1>
            <h2>Menu</h2>
            <ul>
                <li></li>
            </ul>
        </>
    )
}

export default RestaurantMenu
