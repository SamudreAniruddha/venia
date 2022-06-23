import React from "react";
import "./PageNotFound.scss"
import { Link } from 'react-router-dom';
const PageNotFound = () => {
    return (
        <div className="not-found-image">
            <div className="not-found-status-code">404</div>
            <div className="not-found-text">Page not found...!</div>
            <Link to="/"><button className="return-button">Main Page</button></Link>
        </div>
    );
};

export default PageNotFound