import { useContext } from 'react'

import CardProdutos from '../../components/Produtos/cardProduto/CardProduto'
import { AuthContext } from '../../contexts/AuthContext'

function Carrinho() {

    const { items, limparCart } = useContext(AuthContext)
    console.log(items)

    return (
        <>
            <div className='flex justify-end m-2'> 
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={limparCart}>Finalizar Compra</button>
            </div>

            <div className='flex flex-col'>
                <div className="flex justify-center w-full my-4">
                    <div className="container flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                items.map(produto => (
                                    <CardProdutos key={produto.id} prod={produto} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </ div >
        </>
    )
}

export default Carrinho