import { useState } from "react"

const Movies = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "Interstellar", year: 2014 },
        { id: 3, title: "The Dark Knight", year: 2008 },
    ])

    const changeTitle = () => {
        setMovies(
            movies.map(movie => (
                movie.id === 1 ? { ...movie, title: "Inception 2" } : movie
            ))
        )
    }

    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.year}</p>
                </div>
            ))}

            <button onClick={changeTitle}>Change Title</button>
        </div>
    )
}
export default Movies