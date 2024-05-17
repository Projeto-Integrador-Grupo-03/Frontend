import React from 'react';
import Hiago from "../../assets/Hiago.jpg";
import Henrique from "../../assets/Henrique.jpg";
import Luiz from "../../assets/Luiz.jpg";
import Vic from "../../assets/Vic.jpg";

function Card() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            <div className="card bg-green-300 border rounded-lg  m-4 border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Hiago Oliveira</h1>
                <img src={Hiago} alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Meu nome é Hiago Oliveira, e sou um estudante apaixonado por Desenvolvimento de Software. Possuo habilidades sólidas em Java, MySql, Spring Boot Framework, React e Typescript. Minha experiência inclui trabalho em equipes ágeis e familiaridade com metodologias Scrum, o que me permitiu colaborar de forma eficaz e me adaptar rapidamente às mudanças do projeto. Atualmente, estou aprimorando minhas habilidades na Generation Brasil, onde me formei no bootcamp de Desenvolvedor Fullstack Java em 2024. Estou ansioso para aplicar meu conhecimento e contribuir positivamente para projetos desafiadores em tecnologia.</p>
            </div>
            <div className="card bg-green-300 border rounded-lg m-4 border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Henrique Cruz</h1>
                <img src={Henrique} alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Formado em ADS - Análise e Desenvolvimento de sistemas, venho realizando alguns cursos na área, como Fundamentos de Lógica de programação entre outros da parte de desenvolvimento, porém gosto muito de apreender coisas novas, por conta disso também fiz alguns cursos sobre Cloud, e venho me desenvolvendo em outras áreas da TI, como segurança e redes.
                    Atualmente estou cursando Segurança da Informação, venho estudando bastante sobre e me desenvolvendo conforme estudo, acredito que tanto segurança tanto desenvolvimento andam juntos.
                    Até 2020 fui atleta de ginástica olímpica, mas sempre tive uma paixão que era a tecnologia, tenho que agradecer os 12 anos de treino e competições, pude conhecer novos lugares, novas pessoas e ajudar a desenvolver algumas competências, como minha comunicação e minha disciplina.
                    Curiosidades: Gosto de jogar vídeo game e assistir alguns animes de vez em quando, além disso gosto muito de fazer academia e também pratico dança de salão.</p>
            </div>
            <div className="card bg-green-300 border rounded-lg m-4 border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Luiz Fernando</h1>
                <img src={Luiz} alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Eu sou formado em Análise e desenvolvimento de sistemas, pela Universidade Metodista de São Paulo, sou uma pessoa com determinação e vontade de ingressar no mercado de trabalho, eu aprendo rápido, tenho conhecimentos em linguagens de programação Java, CSS, HTML, JavaScript, redes de computadores e banco de dados SQL.</p>
            </div>
            <div className="card bg-green-300 border rounded-lg m-4 border-gray-200 p-4 shadow-md text-center">
                <h1 className="text-xl font-bold mb-2">Vic Freitas</h1>
                <img src={Vic} alt="Imagem" className="w-full h-auto mb-4" />
                <p className="text-gray-700">Olá! Sou Victoria Freitas, estudante de Letras com habilitação em português e espanhol e de Análise e Desenvolvimento de Sistemas. Sou uma pessoa curiosa, apaixonada por tecnologia e educação. Atualmente estou iniciando minha trajetória nos estudos na área de desenvolvimento de software. Meu objetivo é ingressar no mercado na área de tecnologia para colocar em prática as habilidades que estou desenvolvendo. Espero que goste do que vai encontrar por aqui! 😁</p>
            </div>
        </div>
    );
}

export default Card;
