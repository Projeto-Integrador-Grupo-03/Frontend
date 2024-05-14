import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardPostagemProps {
  prod: Produto
}

function CardProduto({ prod }: CardPostagemProps) {
  return (
    <div className='border rounded-lg overflow-hidden shadow-md'>
      <div className="bg-emerald-600 py-2 px-4">
        <h3 className='text-lg font-bold text-center text-white'>{prod.nome}</h3>
      </div>

      <div className='p-4 flex items-center justify-between'>
        <img className="w-64 h-44 rounded-md object-cover" src={prod.foto} alt={prod.nome} />

        <div className='ml-4'>
          <p><strong>COR:</strong> {prod.cor}</p>
          <p><strong>MODELO:</strong> {prod.modelo}</p>
          <p><strong>ANO:</strong> {prod.ano}</p>
          <p><strong>PREÇO:</strong> {prod.preco}</p>
          <p><strong>CATEGORIA:</strong> {prod.categoria?.nome}</p>
        </div>
      </div>

      <div className="p-4 flex justify-between">
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