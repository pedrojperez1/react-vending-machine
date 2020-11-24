import React from "react";
import {Link} from "react-router-dom";
import "./BullyStick.css";

const BullyStick = () => {
    return (
        <div className="BullyStick">
            <h1>Are you a dog or something?</h1>
            <img src="https://target.scene7.com/is/image/Target/GUEST_ed7da69a-3305-4ab8-83a9-383068265784?wid=488&hei=488&fmt=pjpeg" alt="Bully stick"></img>
            <br></br>
            <Link to="/"><button type="submit">Go back</button></Link>
        </div>
    )
};

export default BullyStick;