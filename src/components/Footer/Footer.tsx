import logo from '../../assets/marca01 (4).jpg';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <>
    <div className='bg-white border'>
      <div className="pb-0 p-10 bg-dark-blue-footer text-light-gray-footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <img src={logo} className="h-20 p-0 -mt-6 mb-3" />
              <p className="text-light-gray-footer">
                Rua Futuro 01
                <br />
                São Paulo - SP
                <br />
                <div className="pt-3">
                  <b>Celular: (11) 9999-9999</b>
                  <br />
                  <b>sustentadrive@generation.com</b>
                </div>
              </p>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold">Links uteis</h4>
              <ul className="text-meddium-gray-footer">
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/home" className="hover:text-meddium-orange">
                    {" "}
                    Home
                  </Link>
                </li>
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/sobre" className="hover:text-meddium-orange">
                    {" "}
                    Sobre nós
                  </Link>
                </li>
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/sobre" className="hover:text-meddium-orange">
                    {" "}
                    Fale conosco
                  </Link>
                </li>
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/home" className="hover:text-meddium-orange">
                    {" "}
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-semibold">Nossos serviços</h4>
              <ul className="text-meddium-gray-footer">
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/produtos" className="hover:text-meddium-orange">
                    {" "}
                    Produtos
                  </Link>
                </li>
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/home" className="hover:text-meddium-orange">
                    {" "}
                    Categorias
                  </Link>
                </li>
                <li className="pb-3">
                  {" "}
                  <i className="fa fa-chevron-right text-meddium-orange"></i>
                  <Link to="/produtos" className="hover:text-meddium-orange">
                    {" "}
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>


            <div className="mb-5">
              <h4 className="pb-1 font-semibold">Nossa newsletter</h4>
              <Link to="/login">
              <h4 className="py-4">Se inscreva para receber novidades!</h4>
              
              
              <p className="text-meddium-gray-footer pb-3">
                Receba atualizações da plataforma
                <br />
              </p>
                <p className="text-meddium-gray-footer pb-3">Inscreva-se</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-meddium-gray-footer px-10">
        <div className="max-w-7xl flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center">
            <div>
              <p><b>Sustenta Drive</b> Todos os direitos reservados Copyright ©️ 2024</p>
            </div>
            <div>
              <p>
                Desenvolvimento{" "}
                <span className="text-meddium-orange"> Grupo 3 Generation Brasil</span>{" "}
              </p>
            </div>
          </div>
          <div className="text-center text-xl text-white-new mb-2">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-meddium-orange hover:bg-dark-orange mx-1 inline-block pt-1"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
 
}

export default Footer