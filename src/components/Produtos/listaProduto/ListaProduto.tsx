/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { AuthContext } from '../../../contexts/AuthContext';
import Produto from '../../../models/Produto';
import { buscar } from '../../../services/Service';
import CardProduto from '../cardProduto/CardProduto';
import { toastAlerta } from '../../../util/toastAlert';

function ListaProdutos() {
  
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const [loading, setLoading] = useState(true);

  const { usuario, handleLogout } = useContext(AuthContext);


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
      {produtos.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='flex justify-center py-10 font-bold text-3xl text-black mb-2'>
        <h1>Confira nossas ofertas</h1>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-x-0 gap-y-4 justify-items-center my-10'>
        {produtos.map((produto) => (
          <CardProduto key={produto.id} prod={produto} />
        ))}
      </div>
    </>
  );
}

export default ListaProdutos;