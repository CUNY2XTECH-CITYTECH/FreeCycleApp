import React, {useState, useEffect} from "react";

function UserProducts(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async() => {
            try {
                const response = await fetch(); api/products
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
      {products.map((post) => (
        <Products key={products.id} products={products} /> // Render a Post component for each post
      ))}
    </div>
  );
}

export default UserProducts;
