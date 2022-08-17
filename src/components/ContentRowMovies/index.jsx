import ColumnContentRowMovies from "../ColumnContentRowMovies";

const cards = [
    { title: "Movies in Data Base", color: "primary", value: "21", icon: "fa-film" },
    { title: "Total awards", color: "success", value: "79", icon: "fa-award" },
    { title: "Actors quantity", color: "warning", value: "49", icon: "fa-user" }
];

export default function ContentRowMovies() {

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