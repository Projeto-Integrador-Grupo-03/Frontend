import { Link } from "react-router-dom"
import Categoria from "../../../models/Categoria"

interface CardCategoriaProps {
    categoria: Categoria
  }
  
  function CardCategorias({categoria}: CardCategoriaProps) {
    return (
      <div className='flex flex-col rounded-2xl overflow-hidden border border-gray-300 shadow-lg h-full'>
        <header className='py-4 px-6 bg-emerald-600 text-white font-bold text-2xl rounded-tl-2xl rounded-tr-2xl'>Categoria</header>
        <div className='flex flex-col justify-between flex-grow p-6 bg-white'>
          <div>
            <p className='text-lg text-gray-800 mb-4'>{categoria.nome}</p>
            <p className='text-lg text-gray-800 mb-4'>{categoria.descricao}</p>
          </div>
          <div className="flex justify-between mt-4">
            <Link to={`/editarCategoria/${categoria.id}`} className='w-1/2 text-white bg-emerald-700 hover:bg-emerald-900 flex items-center justify-center py-2 rounded-bl-2xl rounded-tr-2xl'>
              <button className="font-semibold">Editar</button>
            </Link>
            <Link to={`/deletarCategoria/${categoria.id}`} className='w-1/2 text-white bg-red-400 hover:bg-red-700 flex items-center justify-center py-2 rounded-br-2xl rounded-tl-2xl'>
              <button className="font-semibold">Deletar</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default CardCategorias