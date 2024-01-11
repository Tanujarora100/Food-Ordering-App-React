import React, { useEffect, useState } from 'react'
import { MENU_API } from '../utils/constants';
import { useParams } from 'react-router-dom';
import ToggleButtonExample from './ToggleVegButton';
import ShimmerCard from './ShimmerCard';
const RestaurantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    const params = useParams();
    console.log(params.id);

    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API + params.id);
            const jsonData = await response.json();
            console.log(jsonData);
            if (jsonData.data) {
                setRestInfo(jsonData.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchMenu();
    }, []);
    if (restInfo === null)
        return <ShimmerCard></ShimmerCard>;

    const { name, cuisines, costForTwoMessage, areaName, cloudinaryImageId } =
        restInfo?.cards?.[0]?.card?.card?.info ?? {};
    const { itemCards } =
        restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <>
        <ToggleButtonExample></ToggleButtonExample>
            {itemCards.map((item) => (
                <div key={item?.card?.info?.id}>
                    <h1>{item?.card?.info?.name}</h1>
                    <h3>{item?.card?.info?.price}</h3>
                    <h3>{item?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
                    <h4>{areaName}</h4>
                    <br></br>
                </div>
            ))}

        </>
    );
}
export default RestaurantMenu
