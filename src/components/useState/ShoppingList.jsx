import { useState } from "react";

const ShoppingList = () => {
    const [items, setItems] = useState([]);

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        if (name && quantity > 0) {
            setItems([...items, { name: name, quantity: quantity }]);
            setName("");
            setQuantity(0);
        } else {
            alert("Please enter valid item name and quantity.");
        }
    }

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="quantity">Quantity: </label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            
            <h2>Shopping List</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default ShoppingList;