import "./App.css";
import Movie from "./Movie";

const movies = [
    {
        title: "Matrix",
        poster: "",
    },
    {
        title: "Full metal Jacket",
        poster: "",
    },
    {
        title: "Oldboy",
        poster: "",
    },
    {
        title: "Star Wars",
        poster: "",
    },
];

function App() {
    return (
        <div className="App">
            {movies.map((movie, index) => {
                return <Movie title={movie.title} poster={movie.poster} key={index} />;
            })}
        </div>
    );
}

export default App;
