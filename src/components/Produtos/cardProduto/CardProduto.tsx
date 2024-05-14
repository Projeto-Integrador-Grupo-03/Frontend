import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardPostagemProps {
  prod: Produto
}

function CardProduto({prod}: CardPostagemProps) {
  return (
    <div className='border-slate-900 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
        <div className="flex w-full bg-gray-400 py-2 px-4 items-center gap-4">
          {/* <img src={prod.foto} className='h-12 rounded-full' alt="" /> */}
          <h3 className='text-lg font-bold text-center uppercase '>{prod.nome}</h3>
        </div>

        <div className='p-4 '>
          <img src={prod.foto} />
          <p>{`COR: ${prod.cor}`}</p>
          <p>{`MODELO: ${prod.modelo}`}</p>
          <p>{`ANO: ${prod.ano}`}</p>
          <p>{`PREÇO: ${prod.preco}`}</p>
          <p>CATEGORIA: {prod.categoria?.nome}</p>
        </div>
        
      </div>
      <div className="flex">
      <Link to={`/editarProduto/${prod.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarProduto/${prod.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardProduto