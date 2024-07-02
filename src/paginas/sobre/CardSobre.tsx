import React from 'react';
import Hiago from "../../assets/Hiago.jpg";
import Henrique from "../../assets/Henrique.jpg";
import Luiz from "../../assets/Luiz.jpg";
import Vic from "../../assets/Vic.jpg";

function Card() {
    return (
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Hiago Oliveira</h1>
                <a href="https://www.linkedin.com/in/hiago-santos-oliveira/">
                    <img src={Hiago} alt="Hiago Oliveira" className="w-80 h-80 rounded-full mb-4 cursor-pointer" />
                </a>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Henrique Cruz</h1>
                <a href="https://www.linkedin.com/in/henriquec-guimaraes/">
                    <img src={Henrique} alt="Henrique Cruz" className="w-80 h-80 rounded-full mb-4 cursor-pointer" />
                </a>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Luiz Fernando</h1>
                <a href="https://www.linkedin.com/in/luiz-fernando-24588618b/">
                    <img src={Luiz} alt="Luiz Fernando" className="w-80 h-80 rounded-full mb-4 cursor-pointer" />
                </a>
            </div>
            <div className="text-center">
                <h1 className="text-xl font-bold mb-2">Vic Freitas</h1>
                <a href="https://www.linkedin.com/in/victoriafreitax/">
                    <img src={Vic} alt="Vic Freitas" className="w-80 h-80 rounded-full mb-4 cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default Card;
