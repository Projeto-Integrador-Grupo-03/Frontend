import React from 'react';
import Hiago from "../../assets/Hiago.jpg";
import Henrique from "../../assets/Henrique.jpg";
import Luiz from "../../assets/Luiz.jpg";
import Vic from "../../assets/Vic.jpg";

function Card() {
    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Hiago Oliveira</h1>
                <img src={Hiago} alt="Imagem" className="w-80 h-80 rounded-full mb-4" />
                
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Henrique Cruz</h1>
                <img src={Henrique} alt="Imagem" className="w-80 h-80 rounded-full mb-4" />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Luiz Fernando</h1>
                <img src={Luiz} alt="Imagem" className="w-80 h-80 rounded-full mb-4" />
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Vic Freitas</h1>
                <img src={Vic} alt="Imagem" className="w-80 h-80 rounded-full mb-4" />
            </div>
        </div>
    );
}

export default Card;
