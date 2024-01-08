import { IMG_CDN_URL } from "../../utils/constants";
import "./RestaurantCard.css";
 export const  RestaurantCard=(props)=> {
  return (
    <div className="res-card">
       <img src={IMG_CDN_URL + props.cloudinaryImageId} />
      <h3>{props.name}</h3>
      <img
        src={IMG_CDN_URL} 
        alt=""
      />
      <h4>Cuisine:{props.cuisines}</h4>
      <h4>DelieveryTime:{props.deliveryTime}</h4>
      <h4>Area:{props.area}</h4>
    </div>
  );
}
