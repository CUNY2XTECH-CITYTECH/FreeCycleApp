type commentProps = {
    owner_id: number,
    product_id: number,
    content: string
}

export const Comment = ({owner_id, product_id, content}: commentProps) => {
    return (
        <div>
            <p>Comment Owner ID: {owner_id}</p>
            <p>Product ID {product_id}</p>
            <p>Content: {content}</p>
        </div>
    )
}