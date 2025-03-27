import React, {useState, useEffect} from "react";
import { Product } from '../Product/product'; 

function UserProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async() => {
            try {
                const response = await fetch('http://localhost:3000/api/products/${user_id}'); 
                if (!response.ok){
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }

    };
    fetchProducts();
}, []);

if (loading) {
    return <div>Loading...</div>;
}

if (error){
    return <div>Error: {error}</div>;
}

return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default UserProducts;
