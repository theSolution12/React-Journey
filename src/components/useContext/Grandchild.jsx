// After

import { Context } from "./Parent";

const Grandchild = () => {
    return (
        <Context.Consumer>
            {name => (
                <div>
                    {name}
                </div>
            )}
        </Context.Consumer>
    );
}

export default Grandchild;