import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlert';


function Navbar() {
  
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login')
}

  return (
    <>
     <div className='w-full bg-emerald-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>SUSTENTA DRIVE</div>
            
            <div className='flex gap-4'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar