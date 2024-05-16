import React from 'react';
import Card from './CardsSobre';


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