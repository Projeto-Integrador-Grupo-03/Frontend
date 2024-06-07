import React from 'react';
import Card from './CardSobre';


function Sobre() {
    return (
        <>
        {/* <div className=" bg-slate-800 text-white font-bold pt-10 w-auto h-80">
            <div className="mb-4 text-center text-3xl">Nossos Valores</div>
                <div className="text-center">
                    <h3 className="text-center">
                        Na SustentaDrive, estamos comprometidos com um futuro mais limpo e sustentável para todos. Desde o nosso início, nos dedicamos a oferecer uma alternativa revolucionária na indústria automobilística: veículos que não apenas entregam desempenho excepcional, mas também protegem o planeta que todos chamamos de lar.
                        Na SustentaDrive, acreditamos que o progresso não precisa vir às custas do meio ambiente. É por isso que nos especializamos em veículos elétricos e outras tecnologias de mobilidade sustentável. Nossos carros são alimentados por energia limpa e renovável, reduzindo drasticamente as emissões de carbono e promovendo a saúde do nosso ecossistema.
                        Além disso, estamos comprometidos em fornecer uma experiência excepcional aos nossos clientes. Nossa equipe dedicada está aqui para ajudá-lo a encontrar o veículo perfeito para atender às suas necessidades, ao mesmo tempo em que orienta você através das opções de financiamento e assistência técnica.
                        Na SustentaDrive, acreditamos que cada escolha conta. Ao escolher um de nossos veículos, você não apenas desfruta de uma condução suave e eficiente, mas também contribui para um futuro mais limpo e saudável para as gerações futuras. Junte-se a nós enquanto avançamos em direção a um mundo onde a mobilidade ecológica é a norma.
                        Obrigado por escolher SustentaDrive. Juntos, estamos dirigindo para um amanhã melhor.
                    </h3>
            </div>
        </div> */}

        <div className="bg-slate-800 text-white  flex justify-center font-bold py-10 text-3xl">
            <h1>Integrantes do Projeto  </h1>
        </div>
        
        <div className=" flex justify-center">   
            <Card />    
        </div>
        </>
    );
}

export default Sobre;