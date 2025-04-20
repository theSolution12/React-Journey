const ProductInfo = () => {

    const product = {
        productName: "Laptop",
        price: 1200,
        availablity: true,
    }

    return (
        <div>
            <h1>Name: {product.productName}</h1>
            <p>Price: ${product.price}</p>
            <p>Availability: {product.availablity ? "In stock" : "Out of stock"}</p>
        </div>
    )
}

export default ProductInfo;