import React from "react";

type postProps = {
    content: string
    image: string
    // imgSize?: number
}

export const Post = ({content, image}: postProps) => {
    return (
    <div className="posts">
        <h1 className="post-title">Placeholder title, might add a prop for the title</h1>
        <p>{content}</p>
        <img src={image}></img>
    </div>
    )
}