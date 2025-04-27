// After

import Child from "./Child";
import { createContext } from "react";

export const Context = createContext();

const Parent = () => {
    return (
        <div>
            <Context.Provider value={"Arthur Morgan"}>
                <Child />
            </Context.Provider>
        </div>
    );
}

export default Parent;