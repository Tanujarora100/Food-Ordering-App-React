
import "../ProductCard/ProductCard.css"
export const ProductCard = ({ title, description, image }) => {

    return (
        <>
            <div className="product-card">
                <h2>{title}</h2>
                {/* <h3>{description}</h3> */}
                <img src={image}></img>
            </div>

        </>
    )
}