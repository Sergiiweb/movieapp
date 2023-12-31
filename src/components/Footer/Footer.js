import {NavLink} from "react-router-dom";

import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.Header}>
            <div className={css.nav}>
                <NavLink to={'/movies/1'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>
            <div className={css.date}>The Movie app©, {new Date().getFullYear()}</div>
            <NavLink to={''}>
                <div className={css.logo}></div>
            </NavLink>
        </div>
    );
};

export {Footer};