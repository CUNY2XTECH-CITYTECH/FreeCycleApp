import React, {useEffect, useState} from'react';
import { useRouter } from 'next/router';
import Post from '../components/Post';


const MyPage = () => {
    const router = useRouter();
    const {postId} = router.query;

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
            const response = await fetch (`http://localhost:3000/api/posts/${postId}`); 

            //error handling
            if (!response.ok){
                throw new Error('Failed to fetch post');
            }
            const result = await response.json();
            setData(result);   
            } catch (error){
                console.error("Error fetching post: ", error);
            }
        }

        fetchData();
    }, [postId]);

    return (
        <div>
            {data && <Post post = {data} />}
        </div>
    );
};

export default MyPage;

