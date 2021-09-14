import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// class Movie extends Component {
//     static propTypes = {
//         title: PropTypes.string,
//         poster: PropTypes.string,
//     };
//     render() {
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster} />
//                 <h1>hello this is a {this.props.title}</h1>
//             </div>
//         );
//     }
// }
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre, index) => (
                        <MovieGenre genre={genre} key={index} />
                    ))}
                </div>
                <p className="Movie__Synopsis">{synopsis}</p>
            </div>
        </div>
    );
}

function MoviePoster({ poster, alt }) {
    return <img src={poster} alt={alt} title={alt} className="Movie__Poster"></img>;
}

function MovieGenre({ genre }) {
    return <span className="Movie_Genre">{genre}</span>;
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
};
// class MoviePoster extends Component {
//     static propTypes = {
//         poster: PropTypes.string.isRequired,
//     };
//     render() {
//         return <img src={this.props.poster}></img>;
//     }
// }
export default Movie;
