import React from "react";

function Header(){
    return(
        <footer className="bg-green-800 flex items-center">
            <img src="./icon.svg" className="w-20" />
            <p className="text-white text-lg md:text-3xl font-mono py-5 pl-2 font-black">
              Mr White Info
            </p>
        </footer>
    )
}

export default Header;