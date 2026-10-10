import { useState, useEffect } from "react";
import ProductCard from "../Components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])

    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {products.map(prod => (
                <ProductCard
                    key={prod.id}
                    id={prod.id}
                    title = {prod.title}
                    price = {prod.price}
                    image = {prod.image}
                    category = {prod.category}
                />
            ))}
        </div>
    );
}