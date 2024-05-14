/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import './Home.css'
import carroLogo from '../../assets/logo01.jpg'
import ModalProduto from '../../components/Produtos/modalProduto/ModalProduto';
import CardProduto from '../../components/Produtos/cardProduto/CardProduto';
import { useContext, useEffect, useState } from 'react';
import Produto from '../../models/Produto';
import { toastAlerta } from '../../util/toastAlert';
import { buscar } from '../../services/Service';
import { AuthContext } from '../../contexts/AuthContext';

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
        <div className="bg-emerald-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo ao futuro!</h2>
              <p className='text-xl'>Onde você vai andar com responsabilidade</p>
  
              <div className="flex justify-around gap-4">
              <ModalProduto />
                <button className='border rounded py-2 px-4 hover:bg-white hover:text-black'>Veja nossos catálogos</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={carroLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <p className='text-3xl font-semibold text-center '>VEJA NOSSOS PRODUTOS EM DESTAQUE:</p>
      
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {produtos.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>
      </>
    );
}

export default Home;