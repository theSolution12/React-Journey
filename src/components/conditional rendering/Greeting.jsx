const Greeting = ({ timeOfDay }) => {
    return (
        <div>
            {timeOfDay === "morning" && <h1>Good Morning!</h1>}
            {timeOfDay === "afternoon" && <h1>Good Afternoon!</h1>}
            {timeOfDay === "evening" && <h1>Good Evening!</h1>}
            {timeOfDay === "night" && <h1>Good Night!</h1>}
        </div>
    );
}

export default Greeting;