import {NavLink} from "react-router-dom";

import css from './Genre.module.css';

const Genre = ({genre}) => {
    const {name, id} = genre;

    return (
        <div className={css.genreWrap}>
            <NavLink to={`genreId/${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};