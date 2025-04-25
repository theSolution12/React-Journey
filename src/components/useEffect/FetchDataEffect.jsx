import { useEffect } from "react";
import { useState } from "react"

const FetchDataEffect = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setData(data);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect