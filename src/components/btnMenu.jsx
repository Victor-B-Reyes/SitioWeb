import React from "react";

function BtnMenu({name, pag, state}){
    function estadoPag(){
        state(pag)
    }
    
    return(
        <button className="w-full text-left rounded-lg hover:bg-slate-200 px-2 py-1" onClick={estadoPag}>{name}</button>
    )
}

export default BtnMenu;