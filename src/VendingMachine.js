import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Home from "./Home";
import CinnamonToastCrunch from "./CinnamonToastCrunch";
import SaltAndVinegar from "./SaltAndVinegar";
import BullyStick from "./BullyStick";

const VendingMachine = () => {
    return (
        <>
        <BrowserRouter>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/ctc">
                <CinnamonToastCrunch />
            </Route>
            <Route exact path="/saltandvinegar">
                <SaltAndVinegar />
            </Route>
            <Route exact path="/bullystick">
                <BullyStick />
            </Route>
        </BrowserRouter>
        </>
    )
};

export default VendingMachine;