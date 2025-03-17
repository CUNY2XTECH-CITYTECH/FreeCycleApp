import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '; // Not sure what the path is 


const Feed = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/posts-form');
                setPosts(response.data);
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
              <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
