import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error("Network response was not ok" + response.statusText);
                }
                const data = await response.json();
                setData(data);
            }
            catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        }

        fetchData();
    }, [url])

    return data;
}

export default useFetch;