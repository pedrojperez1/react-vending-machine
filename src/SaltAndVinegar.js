import React from "react";
import {Link} from "react-router-dom";
import "./SaltAndVinegar.css";

const SaltAndVinegar = () => {
    return (
        <div className="SaltAndVinegar">
            <h1>Holla if you like to puck your lips!</h1>
            <img src="https://images.heb.com/is/image/HEBGrocery/001460396"  alt="Salt and Vinegar chips"></img>
            <br></br>
            <Link to="/"><button type="submit">Go back</button></Link>
        </div>
    )
};

export default SaltAndVinegar;
