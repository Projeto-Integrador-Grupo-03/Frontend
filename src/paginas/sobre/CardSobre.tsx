import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faJava, faReact, faJsSquare, faHtml5 } from '@fortawesome/free-brands-svg-icons';

function Card(){
    return (
        <div className="w-300 h-300 bg-soft-white text-gray rounded-lg shadow-md p-20 flex flex-col items-center justify-between">
            <h3 className="text-primary">Título</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="w-full flex items-center justify-between">
                {/* <div className="flex gap-8 text-red-500 text-2xl">
                
                    <FontAwesomeIcon icon={faJava} />
                    <FontAwesomeIcon icon={faReact} />
                    <FontAwesomeIcon icon={faJsSquare} />
                    <FontAwesomeIcon icon={faHtml5} />
                 
                </div> */}
                
        <button className="w-20 h-20 border border-gray-300 rounded-lg bg-primary text-black text-2xl flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:bg-red-500 hover:text-black hover:shadow-lg px-15 py-3">
                    GitHub
                </button>
                
            </div>
        </div>
    )
}

export default Card;