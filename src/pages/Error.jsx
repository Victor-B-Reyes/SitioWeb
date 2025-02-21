import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Error(){
    return(
        <>
        <Header />
        <div className="bg-black h-screen">
            <div className="p-5 sm:p-10">
                <div className="bg-white p-5">
                    <h1>Direccion no encontrada</h1>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Error;