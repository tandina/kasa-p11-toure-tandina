import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./errorDisplay.css"

const errorDisplay =(props) => (
    <>
        <div className="kasaError">
            <div className="KassaError__number">
                {props.errorNumber}
            </div>
            <div className="KassaError__Text">
                {props.errorText}
            </div>
            <NavLink to="/"><p className="underline">Retourner sur la page d'accueil</p></NavLink>
            <Outlet />
        </div>
    </>
    
);

export default errorDisplay;