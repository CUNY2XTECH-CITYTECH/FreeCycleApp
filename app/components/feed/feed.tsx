"use client"
import React, { useState, useEffect } from 'react';
import { Product } from '../Product/product'; 


const Feed = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/products');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError('Error fetching posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            { posts.map((post) => (
              <Product key={post.id} id={post.id} name={post.name} description={post.description} imageUrl={post.imageUrl} price={post.price} stock={post.stock}/>
            ))}
        </div>
    );
};

export default Feed;
