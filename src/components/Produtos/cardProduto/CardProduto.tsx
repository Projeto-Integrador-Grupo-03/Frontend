import { Link, useLocation } from "react-router-dom";
import Produto from "../../../models/Produto";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";
import { RotatingLines } from "react-loader-spinner";
import { FaShoppingCart } from "react-icons/fa";

interface CardPostagemProps {
  prod: Produto;
}

function CardProduto({ prod }: CardPostagemProps) {
  const { usuario, adicionarProduto, removerProduto, isLoading } =
    useContext(AuthContext);

  let botoesAdmin;

  const location = useLocation();

  const isCarrinho = location.pathname === "/carrinho";

  if (usuario.token !== "" && usuario.login == "admin@admin.com") {
    botoesAdmin = (
      <div className="flex justify-between">
        <Link
          to={`/editarProduto/${prod.id}`}
          className="text-white bg-emerald-700 hover:bg-emerald-900 font-bold py-2 px-4 rounded-full w-24 flex justify-center"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Editar</span>
          )}
        </Link>
        <Link
          to={`/deletarProduto/${prod.id}`} 
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-24 flex justify-center"
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>Deletar</span>
          )}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-md w-96 h-auto">
      <img className="w-full h-52" src={prod.foto} alt={prod.nome} />

      <div>
        <div className="flex p-2">
        ⭐⭐⭐⭐⭐  <p> 5.0 (1 avaliações)</p>
        </div>
        <div className="py-2 px-4 text-center">
          <h3 className=' text-xl text-black mb-2'>{prod.nome}</h3>
        </div>

        <div className="text-black">
          <div>
            <p className=" ml-4 text-lg mb-2">{prod.modelo}</p>
          </div>
          <div>
            <p className="ml-4 text-lg mb-2">Ano {prod.ano}</p>
          </div>
          <div>
            <p className=" font-bold ml-4 text-2xl mb-2">R$ {prod.preco}</p>
          </div>
        </div>
      </div>

      <div className="py-2">
        {isCarrinho && usuario.token !== "" ? (
          <div>
            <button className="bg-slate-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-52"
            onClick={() => adicionarProduto(prod)}>Adicionar</button>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-52"
             onClick={() => removerProduto(prod.id)}>Remover</button>
          </div>
        ) : (
          <div  className="flex justify-center">
            <button className="bg-slate-700 hover:bg-slate-950 text-white font-bold py-2 px-4 rounded-lg w-52 "
             onClick={() => adicionarProduto(prod)}>
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span className="flex justify-center">
                  <FaShoppingCart className="h-5 w-5 mr-2"/>
                  Adicionar
                </span>
              )}
            </button>
          </div>
        )}
      </div>

      {botoesAdmin}
    </div>
  );
}

export default CardProduto;
