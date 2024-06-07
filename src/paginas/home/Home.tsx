/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import ModalProduto from '../../components/Produtos/modalProduto/ModalProduto';
import CardProduto from '../../components/Produtos/cardProduto/CardProduto';
import { useContext, useEffect, useState } from 'react';
import Produto from '../../models/Produto';
import { toastAlerta } from '../../util/toastAlert';
import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';
import Carrossel from '../../components/carrossel/Carrossel';
import { Link } from 'react-router-dom';

function Home() {


  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [loading, setLoading] = useState(true);

  const { handleLogout } = useContext(AuthContext);


  async function buscarProdutos() {
    try {
        await buscar('/produto', setProdutos, {});
        setLoading(false);
    } catch (error: any) {
        if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', "info")
            handleLogout()
        }
    }
}

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

    return (
        <>
         <div className='carrossel flex justify-center'>
              <Carrossel />
        </div>
        <div className='bg-slate-700 bg-cover bg-center flex justify-center'>
          <div className='container text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo ao futuro!</h2>
              <p className='text-xl'>Movendo-se para um futuro mais verde</p>
  
              <div className="flex justify-around gap-4">
                <ModalProduto />
              <Link to='/produtos' className='hover:underline'><button className='border rounded py-2 px-4 hover:bg-slate-200 hover:text-black'>Veja nossos catálogos</button></Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
          {produtos.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>
      </>
    );
}

export default Home;