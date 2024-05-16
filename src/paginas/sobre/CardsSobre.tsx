import React from 'react'


function Card(){
    return (
        <div className="w-300 h-300 bg-soft-white text-gray rounded-lg shadow-md p-20 flex flex-col items-center justify-between">
            <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
            <div className="text-gray-600 justify-center items-center h-full bg-gray-100 rounded-lg shadow-md p-4">  
                <h1>Bem-vindo à SustentaDrive</h1>
                <p className="mb-4">Na SustentaDrive, estamos comprometidos com um futuro mais limpo e sustentável para todos. Desde o nosso início, nos dedicamos a oferecer uma alternativa revolucionária na indústria automobilística: veículos que não apenas entregam desempenho excepcional, mas também protegem o planeta que todos chamamos de lar.</p>
                <p className="mb-4">Na SustentaDrive, acreditamos que o progresso não precisa vir às custas do meio ambiente. É por isso que nos especializamos em veículos elétricos e outras tecnologias de mobilidade sustentável. Nossos carros são alimentados por energia limpa e renovável, reduzindo drasticamente as emissões de carbono e promovendo a saúde do nosso ecossistema.</p>
                <p className="mb-4">Além disso, estamos comprometidos em fornecer uma experiência excepcional aos nossos clientes. Nossa equipe dedicada está aqui para ajudá-lo a encontrar o veículo perfeito para atender às suas necessidades, ao mesmo tempo em que orienta você através das opções de financiamento e assistência técnica.</p>
                <p className="mb-4">Na SustentaDrive, acreditamos que cada escolha conta. Ao escolher um de nossos veículos, você não apenas desfruta de uma condução suave e eficiente, mas também contribui para um futuro mais limpo e saudável para as gerações futuras. Junte-se a nós enquanto avançamos em direção a um mundo onde a mobilidade ecológica é a norma.</p>
                <p className="mb-4">Obrigado por escolher SustentaDrive. Juntos, estamos dirigindo para um amanhã melhor.</p>
                
            </div>
           
            <h3 className="text-2xl font-bold mb-4">Integrantes</h3>
                
            
            <div className="flex justify-between">
                <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md p-4 m-4">
                    { <button className="w-20 h-20 border border-gray-300 rounded-lg bg-primary text-black text-2xl flex items-center justify-center cursor-pointer shadow-md transition-all duration-300 hover:bg-red-500 hover:text-black hover:shadow-lg px-15 py-3">
                                GitHub
                            </button>}
                </div>
                <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md p-4 m-4">
                    {/* Conteúdo do segundo card */}
                </div>
                <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md p-4 m-4">
                    {/* Conteúdo do terceiro card */}
                </div>
                <div className="w-64 h-64 bg-gray-200 rounded-lg shadow-md p-4 m-4">
                    {/* Conteúdo do quarto card */}
                </div>
            </div>
        </div>
    )
}

export default Card;
