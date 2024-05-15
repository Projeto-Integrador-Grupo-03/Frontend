import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'
import { AuthContext } from '../../../contexts/AuthContext';
import { useContext } from 'react';

interface CardPostagemProps {
  prod: Produto
}

function CardProduto({ prod }: CardPostagemProps) {

  const { adicionarProduto, removerProduto } = useContext(AuthContext)

  return (
    <div className='border rounded-lg overflow-hidden shadow-md'>
      <div className="bg-emerald-600 py-2 px-4">
        <h3 className='text-lg font-bold text-center text-white'>{prod.nome}</h3>
      </div>

      <div>
        <img className="flex justify-center w-full h-96 object-cover" src={prod.foto} alt={prod.nome} />

        <div className='ml-4'>
          <p><strong>COR:</strong> {prod.cor}</p>
          <p><strong>MODELO:</strong> {prod.modelo}</p>
          <p><strong>ANO:</strong> {prod.ano}</p>
          <p><strong>PREÇO: </strong>R$ {prod.preco}</p>
          <p><strong>CATEGORIA:</strong> {prod.categoria?.nome}</p>
        </div>
      </div>

      <div className="p-4 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => adicionarProduto(prod)}>Adicionar</button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={() => removerProduto(prod.id)}>Remover</button>
                <Link to={`/editarProduto/${prod.id}`} className='text-white bg-emerald-700 hover:bg-emerald-900 rounded-md py-2 px-4'>
                  Editar
                </Link>
                <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 rounded-md py-2 px-4'>
                  Deletar
                </Link>
      </div>
    </div>
  );
}

export default CardProduto;