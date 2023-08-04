import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {moviesService} from "../../services";
import {MoviesListCard} from "../MoviesList/MoviesListCard/MoviesListCard";
import css from "../MoviesList/MoviesList.module.css";

const MoviesByGenre = () => {
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const {genreId} = useParams();
    useEffect(() => {
        moviesService.getAllByGenre(genreId).then(({data}) => setMoviesByGenre(data.results));
    }, [genreId])

    return (
        <div className={css.MoviesListWrap}>
            <div className={css.MoviesListWrapper}>
                {moviesByGenre.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenre};