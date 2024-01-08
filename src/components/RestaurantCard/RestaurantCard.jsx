import { REST_CARD_URL } from "../../utils/constants";

export function RestaurantCard(props) {
  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <img
        src={REST_CARD_URL} 
        alt=""
      />
      <h4>{props.cuisine}</h4>
      <h4>{props.starRating}</h4>
    </div>
  );
}
