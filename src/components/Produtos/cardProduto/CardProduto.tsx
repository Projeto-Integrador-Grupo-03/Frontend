import { Link, useLocation } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';
import { RotatingLines } from 'react-loader-spinner';

interface CardPostagemProps {
  prod: Produto
}

function CardProduto({ prod }: CardPostagemProps) {

  const {usuario, adicionarProduto, removerProduto, isLoading } = useContext(AuthContext)

  let botoesAdmin;

  const location = useLocation();

  const isCarrinho = location.pathname === '/carrinho';

   if (usuario.token !== "" && usuario.login == "admin@admin.com") {
     botoesAdmin = (
             <div className="p-4 flex justify-between">        
      <Link to={`/editarProduto/${prod.id}`} className='text-white bg-emerald-700 hover:bg-emerald-900 font-bold py-2 px-4 rounded-full w-24 flex justify-center'>              
              {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Editar</span>}</Link>
      <Link to={`/deletarProduto/${prod.id}`} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-24 flex justify-center'>              
              {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Deletar</span>}</Link>
      </div>
     )
   }


  return (
    <div className='bg-white border rounded-lg overflow-hidden shadow-md'>
      <div className="bg-white py-2 px-4">
        <h3 className='text-lg font-bold text-center text-black'>{prod.nome}</h3>
      </div>

      <div>
        <img className="flex justify-center w-full h-96 object-cover" src={prod.foto} alt={prod.nome} />

        <div className=' text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4'>
          <div>
            <p className="font-semibold text-lg mb-2 flex justify-center"><strong>Cor: </strong> {prod.cor}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2 flex justify-center"><strong>Modelo: </strong> {prod.modelo}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2 flex justify-center"><strong>Ano: </strong> {prod.ano}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2 flex justify-center"><strong>Preço: R$</strong>{prod.preco}</p>
          </div>
          <div>
            <p className="font-semibold text-lg mb-2 flex justify-center"><strong>Categoria: </strong> {prod.categoria?.nome}</p>
          </div>
        </div>
      </div>


<div className="p-4">
        {isCarrinho && usuario.token !== ""? (
          <div className='flex justify-between'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-52"
              onClick={() => adicionarProduto(prod)}>Adicionar</button>

            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full w-52"
              onClick={() => removerProduto(prod.id)}>Remover</button>
          </div>
        ) : (
          
          <div className="flex justify-center">
            <button className="bg-emerald-700 text-black font-bold py-2 px-4 rounded-full w-80 "
            onClick={() => adicionarProduto(prod)}>
              {isLoading ? <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
              <span>Comprar</span>}</button>
          </div>
          
        )}

      </div>

      {botoesAdmin}

    </div>
  );
}

export default CardProduto;