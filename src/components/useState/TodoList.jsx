import { useState } from "react";

const TodoList = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue.trim() ? setItems([...items, inputValue]) : alert("Please enter a valid item.");
        setInputValue('');
    }

    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor="item">Add Item</label>
                <input type="text" id="item" name="item" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;