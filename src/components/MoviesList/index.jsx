import { useState, useEffect } from "react";

function MoviesList(props) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/api/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
    }, []);

    return (
        <table className="table table-bordered table-dark">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Length</th>
                    <th scope="col">Release Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie, index) => (
                        <tr key={index}>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.title}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.length + ' min'}</td>
                            <td>{(new Date(movie.releaseDate)).toLocaleDateString()}</td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    );
}

export default MoviesList