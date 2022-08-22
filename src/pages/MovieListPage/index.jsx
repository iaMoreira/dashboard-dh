import MoviesList from '../../components/MoviesList';


function MovieListPage() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            <div className="row">
                <MoviesList />
            </div>
        </div>
    );
}

export default MovieListPage;