import React from "react";
import Card from "./CardSobre";
import back from "../../assets/backSobrenos.jpg";

function Sobre() {
  return (
    <div className="relative">
      <img
        src={back}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-10 container mx-auto py-10 px-4 bg-green-900 bg-opacity-30 text-white rounded-lg shadow-md">
        <div className="content text-center mb-10">
          <h1 className="text-4xl font-bold">Sustenta Drive</h1>
          <p className="text-xl">Construindo um futuro mais verde.</p>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p className="text-justify">
            Nossa missão é transformar a mobilidade urbana através da venda de produtos elétricos e sustentáveis, contribuindo para a mitigação das mudanças climáticas e promovendo um futuro mais verde. Estamos comprometidos em oferecer veículos 100% elétricos que não apenas reduzem a dependência de combustíveis fósseis, mas também proporcionam uma experiência de transporte mais eficiente e ecológica.
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
          <p className="text-justify">
            Nossa visão é ser referência global em mobilidade sustentável, liderando a transição para um futuro onde o transporte seja inteiramente movido por energias renováveis. Queremos criar um impacto positivo duradouro no meio ambiente, inspirando indivíduos e empresas a adotarem soluções de mobilidade que preservem o planeta para as futuras gerações.
          </p>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside text-justify">
            <li>
              <strong>Sustentabilidade:</strong> Acreditamos que a mobilidade deve ser aliada ao respeito ao meio ambiente. Por isso, oferecemos produtos que minimizam o impacto ambiental e promovem o uso de energia limpa.
            </li>
            <li>
              <strong>Inovação:</strong> Estamos na vanguarda das tecnologias sustentáveis, buscando constantemente soluções inovadoras que melhorem a eficiência e o desempenho de nossos produtos.
            </li>
            <li>
              <strong>Responsabilidade Social:</strong> Destinamos 10% da venda de cada veículo para investimentos em iniciativas de plantio de árvores e agricultura sustentável, reafirmando nosso compromisso com a preservação do planeta.
            </li>
            <li>
              <strong>Transparência:</strong> Valorizamos a honestidade e a clareza em todas as nossas interações, garantindo que nossos clientes tenham todas as informações necessárias para fazer escolhas conscientes.
            </li>
            <li>
              <strong>Comprometimento:</strong> Estamos dedicados a fornecer produtos de alta qualidade e serviços excepcionais, sempre com o objetivo de superar as expectativas dos nossos clientes.
            </li>
          </ul>
        </div>

        <div className="p-6">
          <div className="text-center font-bold py-10 text-3xl">
            <h1>Integrantes do Projeto</h1>
          </div>
          <div className="flex justify-center">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
