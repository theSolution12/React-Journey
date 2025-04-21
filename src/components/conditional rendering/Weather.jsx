const Weather = (props) => {
    const {temperature} = props;

    return (
        <div>
            {temperature < 15 ? "It's cold outside" : (temperature <= 25 ? "It's nice & warm outside" : "It's hot outside")}
        </div>
    )
}

export default Weather;