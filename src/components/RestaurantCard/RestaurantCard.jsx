import { IMG_CDN_URL } from "../../utils/constants";

 export const  RestaurantCard=(props)=> {
  return (
    <div className="res-card">
       <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{props.resName}</h3>
      <img
        src={IMG_CDN_URL} 
        alt=""
      />
      <h4>{props.cuisines}</h4>
      <h4>{props.deliveryTime}</h4>
      <h4>{props.area}</h4>
    </div>
  );
}
