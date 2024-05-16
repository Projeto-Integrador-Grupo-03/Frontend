import React from 'react';
import Card from './CardSobre';


function Sobre() {
    return (
        <>
        <div className=" flex justify-center">
         Nossos Valores
        </div>
        <div className=" flex justify-center">
        Integrantes do Projeto
        </div>
        
        <div className=" flex justify-center">
            
            <Card />
            <Card />
            <Card />
            <Card />
            
        </div>
        </>
    );
}

export default Sobre;