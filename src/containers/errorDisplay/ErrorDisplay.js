import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./errorDisplay.css"

const errorDisplay =(props) => (
    <>
        <div className="kasaError">
            <div className="KassaError__number font70096">
                {props.errorNumber}
            </div>
            <div className="KassaError__Text font50018 txt-center">
                {props.errorText}
            </div>
            <NavLink to="/"><p className="underline font50014">Retourner sur la page d'accueil</p></NavLink>
            <Outlet />
        </div>
    </>
    
);

export default errorDisplay;