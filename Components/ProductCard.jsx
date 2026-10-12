import { useCart } from "../src/context/CartContext";

const ProductCard = ({ title, price, image , category }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id,
            title,
            price
        })
    }
   return (
    <div className="card" style={{ width: "300px"}}>
        <img className="card-img-top" src={image} alt="product" />
        <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">₹.{price}</p>
            <p className="card-text">{category}</p>
            <button className="btn btn-primary"
                onClick={handleAddToCart}
            >
                Add To Cart
            </button>
        </div>
    </div>
   );
}

export default ProductCard