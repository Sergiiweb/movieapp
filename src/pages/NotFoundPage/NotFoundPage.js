import {NavLink} from "react-router-dom";

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {

    return (
        <div className={css.NotFoundPage}>
            NotFoundPage
            <NavLink to={''}>To main</NavLink>
        </div>
    );
};

export {NotFoundPage};