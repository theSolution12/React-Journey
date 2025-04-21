const Product = (props) => {

    const {name, price} = props;

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: {price}</p>
        </div>
    )
}

export default Product;