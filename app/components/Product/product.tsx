import React, {useState} from "react";

type productProps = {
    id: number
    name: string
    description: string
    imageUrl: string
    price: number
    stock: number
}
//Delete button will need to access the db using the id to remove it
export const Product = ({id, name, description, imageUrl, price, stock}: productProps) => {
    const [display, setDisplay] = useState(true);

    return display ? (
    <div className="prod">
        <h1 className="prod-title">Product: {name}</h1>
        <p className="product-desc">{description}</p>
        <img src={imageUrl}></img>
        <p>Price: ${price}, In Stock:{stock}</p>
        <button onClick={() => setDisplay(false)}>Delete Post</button>
    </div>
    ) : null;
}