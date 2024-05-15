import React, { useContext } from 'react';
import FormularioProduto from '../formularioProduto/FormularioProduto';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProduto.css'
import { AuthContext } from '../../../contexts/AuthContext';

function ModalProduto() {
  let modalComponent

  const { usuario} = useContext(AuthContext)

if (usuario.token !== "" && usuario.login == "admin@admin.com") {
    modalComponent = (

      <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-black'>Novo produto</button>} modal>
        <div>
          <FormularioProduto />
        </div>
      </Popup>
      
    )
  }

  return (
    <>
      {modalComponent}
    </>
  )

}



export default ModalProduto;