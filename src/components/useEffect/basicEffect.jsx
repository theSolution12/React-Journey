import { useEffect } from "react"

const BasicEffect = () => {

    useEffect(() => {
        console.log("Component mounted");
    }, [])

    return (
        <div>basicEffect</div>
    )
}

export default BasicEffect