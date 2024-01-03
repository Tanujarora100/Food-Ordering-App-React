export function RestaurantCard(props) {
  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <img
        src="https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken--750x750.jpg"
        alt=""
      />
      <h4>{props.cuisine}</h4>
      <h4>{props.starRating}</h4>
    </div>
  );
}
