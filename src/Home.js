import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to the Vending Machine!</h1>
            <h4>What would you like to snack on today?</h4>
            <Link to="/ctc"><button type="submit">Cinnamon Toast Crunch</button></Link>
            <Link to="/saltandvinegar"><button type="submit">Salt and Vinegar Potato Chips</button></Link>
            <Link to="/bullystick"><button type="submit">Bully Stick</button></Link>
        </div>
    )
};

export default Home;