import ColumnContentRowMovies from "../ColumnContentRowMovies";
import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function ContentRowMovies() {
    const cardsDefault = [
        { title: "Movies in Data Base", color: "primary", value: "-", icon: "fa-film" },
        { title: "Total awards", color: "success", value: "-", icon: "fa-award" },
        { title: "Actors quantity", color: "warning", value: "-", icon: "fa-user" }
    ];
    const [cards, setCards] = useState(cardsDefault);

    async function loadDashboard() {
        const response = await api.get('api/dashboard')
        setCards([
            { title: "Movies in Data Base", color: "primary", value: response.data.countMovies, icon: "fa-film" },
            { title: "Total awards", color: "success", value: response.data.countAwards, icon: "fa-award" },
            { title: "Actors quantity", color: "warning", value: response.data.countActors, icon: "fa-user" }
        ]);
    }

    useEffect(() => {
        loadDashboard();
    }, [])
    

    return (

        <div className="row">

            {
                cards.map((card, index) => (
                    <ColumnContentRowMovies key={index} title={card.title} color={card.color} value={card.value} icon={card.icon} />
                ))
            }
        </div>
    );
}