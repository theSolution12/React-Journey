const Greeting = () => {
    const name = "John Doe";
    const date = new Date();

    return (
        <div>
            <h1>Hello, {name}</h1>
            <p>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</p>
        </div>
    )
}

export default Greeting;