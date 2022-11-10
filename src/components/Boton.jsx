import React from "react";
import '../css/Boton.css';

export function Boton({ texto, btnClick, clickHandler }){
    return(
        <button 
        className={ btnClick ? 'btn-click' : 'btn-reiniciar' }
        onClick={clickHandler}>
            {texto}
        </button>
    );
};
