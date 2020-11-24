import React from "react";
import {Link} from "react-router-dom";
import "./CinnamonToastCrunch.css";

const CinnamonToastCrunch = () => {
    return (
        <div className="CinnamonToastCrunch">
            <h1>The taste you can see!</h1>
            <img src="https://images.heb.com/is/image/HEBGrocery/002076607" alt="Cinnamon Toast Crunch"></img>
            <br></br>
            <Link to="/"><button type="button">Go back</button></Link>
        </div>
    )
};

export default CinnamonToastCrunch;