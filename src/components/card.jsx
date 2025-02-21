import React from "react";
import { Link } from "react-router-dom";

function Card({name, description, url}){
    return(
        <div className=" hover:bg-gray-200 rounded-lg p-4 bg-gray-100 shadow-md ">
            <Link to={url}>
            <p className="text-lg md:text-2xl font-bold">{name}</p>
            <p className="text-base md:text-xl">{description}</p>
                <p className=" text-blue-600 hover:text-blue-500 underline  text-right"> Leer más</p>
            </Link>
        </div>
    )
}

export default Card;