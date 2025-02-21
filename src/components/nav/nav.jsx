import React from "react";
import { Link } from "react-router-dom";

function Nav(){
    return(
        <div className="bg-white text-lg flex justify-around">
            <Link to="/">Home</Link>
            <Link to="/Programacion">Programacion</Link>
        </div>
    )
}

export default Nav;