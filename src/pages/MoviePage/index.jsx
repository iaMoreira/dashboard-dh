import { useParams } from "react-router-dom";

function MoviePage() {
    const { id } = useParams();
    return (
        <h1>Movie {id}</h1>
    );
}

export default MoviePage;