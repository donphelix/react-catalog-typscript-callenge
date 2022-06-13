import { CSSProperties, FC, SetStateAction, useState} from "react";

import MovieList from "../molecules/MovieList";
import MoviePreview from "../molecules/MoviePreview";

const movieCatalogueWrapperStyle: CSSProperties = {
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%"
};

const movieSectionWrapperStyle: CSSProperties = {
    flex: "1 1 50%",
    height: "calc(100vh - 60px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const moviePreviewWrapperStyle: CSSProperties = {
    ...movieSectionWrapperStyle,
    textAlign: "center",
    marginRight: "1em",
    alignSelf: "flex-start"
};

const movieListWrapperStyle: CSSProperties = {
    ...movieSectionWrapperStyle,
    textAlign: "left",
    alignSelf: "flex-end"
};

type MovieData = {
    title: string;
    year: string;
    id: string;
    poster: string;
    director: string;
    casts: string;
    genre: string;
};

type MovieCatalogueProps = {
    movieListData: MovieData[];
};

const MovieCatalogue: FC<MovieCatalogueProps> = ({movieListData}) => {
    const [selectedMovieId, setMovieId] = useState<string>(movieListData[1].id);

    let selectedMovie =
        movieListData.find((movie) => movie.id === selectedMovieId) ||
        movieListData[0];

    const {title, poster, year, director, casts, genre} = selectedMovie;

    const changeMovieId = (id: string) => {
        setMovieId(id)
    }
    return (
        <div style={movieCatalogueWrapperStyle}>
            <div style={moviePreviewWrapperStyle}>
                <MoviePreview
                    movieTitle={title}
                    posterUrl={poster}
                    releaseYear={year}
                    director={director}
                    casts={casts}
                    genre={genre}
                />
            </div>
            <div style={movieListWrapperStyle}>
                <MovieList
                    movieItemList={movieListData}
                    selectedMovieId={selectedMovieId}
                    onClick={changeMovieId}/>
            </div>
        </div>
    );
};

export default MovieCatalogue;
