//Before

import Grandchild from "./Grandchild";

const Child = ({ name }) => {
    return (
        <div>
            <Grandchild name={name} />
        </div>
    )
}

export default Child;