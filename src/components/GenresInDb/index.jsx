import { useState, useEffect } from "react";
import api from '../../services/api';

function GenresInDb() {
    const [genres, setGenres] = useState([])

    async function loadGenres() {
        const response = await api.get('/api/genres')
        setGenres(response.data)
    }

    useEffect(() => {
        loadGenres();
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="row">

                        {genres.map((genre, index) =>
                            <div className="col-lg-6 mb-4" key={index}>
                                <div className="card bg-dark text-white shadow">
                                    <div className="card-body">
                                        {genre.name}
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDb;