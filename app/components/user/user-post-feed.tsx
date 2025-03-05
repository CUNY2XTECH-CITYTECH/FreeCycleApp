import React, {useState, useEffect} from "react";

function Posts(){
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchPosts = async() => {
            try {
                const response = await fetch();
                if (!response.ok){
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally{
                setLoading(false);
            }

    };
    fetchPosts();
}, []);

if (loading) {
    return <div>Loading...</div>;
}

if (error){
    return <div>Error: {error}</div>;
}

return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} /> // Render a Post component for each post
      ))}
    </div>
  );
}

export default Posts;
