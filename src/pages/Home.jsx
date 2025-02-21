import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Card from "../components/card";

function Home(){
    return(
        <>
        <Header />
        <div className="bg-black h-screen ">
            <div className="p-5 sm:p-10">
                <div className="bg-white p-5 rounded-lg flex flex-col md:flex-row w-full">
                    <div className="w-full md:w-4/5">
                        <div className="px-6">
                            <Card 
                            name="Programacion"
                            description="En este aparto se encuentran los cursos de programación disponibles; Arduino"
                            url="/Programacion"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/5 mt-6 md:mt-0 ">
                        <div className="bg-gray-100 p-4 rounded-lg shadow-md sticky top-20">
                                <h1>Produccion</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Home;