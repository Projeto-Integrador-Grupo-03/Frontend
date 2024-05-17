import React from 'react';

function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="card bg-white border border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Título</h1>
                <img src="#" alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quo repudiandae aliquam quae quod, qui accusantium, numquam, molestias iure harum asperiores sit. Similique, harum cum unde distinctio illo error aut!</p>
            </div>
            <div className="card bg-white border border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Título</h1>
                <img src="#" alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quo repudiandae aliquam quae quod, qui accusantium, numquam, molestias iure harum asperiores sit. Similique, harum cum unde distinctio illo error aut!</p>
            </div>
            <div className="card bg-white border border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Título</h1>
                <img src="#" alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quo repudiandae aliquam quae quod, qui accusantium, numquam, molestias iure harum asperiores sit. Similique, harum cum unde distinctio illo error aut!</p>
            </div>
            <div className="card bg-white border border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Título</h1>
                <img src="#" alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore quo repudiandae aliquam quae quod, qui accusantium, numquam, molestias iure harum asperiores sit. Similique, harum cum unde distinctio illo error aut!</p>
            </div>
        </div>
    );
}

export default Card;
