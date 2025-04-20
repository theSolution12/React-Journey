const ProductList = () => {

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100,
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200,
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300,
        }
    ];

  return (
    <div>
        {products.map(({id, name, price}) => (
            <div key={id}>
                <h2>{name}</h2>
                <p>Price: ${price}</p>
                <hr />
            </div>
        ))}
    </div>
  )
}

export default ProductList;