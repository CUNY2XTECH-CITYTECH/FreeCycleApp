import React, {useState} from "react";

type postProps = {
    content: string
    image: string
    // imgSize?: number
}

export const Post = ({content, image}: postProps) => {
    const [display, setDisplay] = useState(true);

    return display ? (
    <div className="post">

        <h1 className="post-title">Placeholder title, might add a prop for the title</h1>
        <p>{content}</p>
        <img src={image}></img>
        <button onClick={() => setDisplay(false)}>Delete Post</button>
    </div>
    ) : null;
}