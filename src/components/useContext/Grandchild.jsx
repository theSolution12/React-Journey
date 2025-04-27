// After via useContext

import { Context } from "./Parent";
import { useContext } from "react";

const Grandchild = () => {

    const name = useContext(Context);

    return (
        {name}
    );
}

export default Grandchild;