import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlert';
import logo from '../../assets/marca01 (4).jpg';


function Navbar() {
  
  const navigate = useNavigate()

  const { usuario, quantidadeItems , handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login')
}

let navbarComponent

if (usuario.token !== "" && usuario.login == "admin@admin.com") {
  navbarComponent = (
     <div className='w-full bg-emerald-800 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase flex justify-between items-center'>
            <img src={logo} alt="SustentaDrive Logo" className="h-10 mr-10" /><span>SUSTENTA DRIVE</span></div>
            
            <div className='flex gap-4 items-center'>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/categorias' className='hover:underline'>Categorias</Link>
              <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar categoria</Link>
              <Link to='/produtos' className='hover:underline'>Produtos</Link>
              <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
              <Link to='/perfil' className='hover:underline'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
              <Link to='/carrinho' className='font-bold'>Carrinho [{ quantidadeItems }]</Link>
            </div>
          </div>
        </div>
  )
} else if(usuario.token !== ""){
  navbarComponent = (
    <div className='w-full bg-emerald-800 text-white flex justify-center py-4'>
         <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase flex justify-between items-center'>
            <img src={logo} alt="SustentaDrive Logo" className="h-10 mr-10" /><span>SUSTENTA DRIVE</span></div>
           
           <div className='flex gap-4 items-center'>
             <Link to='/home' className='hover:underline'>Home</Link>
             <Link to='/produtos' className='hover:underline'>Produtos</Link>
             <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
             <Link to='/perfil' className='hover:underline'>Perfil</Link>
             <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             <Link to='/carrinho' className='font-bold'>Carrinho [{ quantidadeItems }]</Link>
           </div>
         </div>
       </div>
  )
}else{
  navbarComponent = (
    <div className='w-full bg-emerald-800 text-white flex justify-center py-4'>
         <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase flex justify-between items-center'>
            <img src={logo} alt="SustentaDrive Logo" className="h-10 mr-10" /><span>SUSTENTA DRIVE</span></div>
           
           <div className='flex gap-4 items-center'>
             <Link to='/login' className='hover:underline bg-white text-black py-2 px-4 rounded-full'>Login</Link>
             <Link to='/home' className='hover:underline'>Home</Link>
             <Link to='/produtos' className='hover:underline'>Produtos</Link>
             <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
           </div>
         </div>
       </div>
  )
}

  return(
    <>
      {navbarComponent}
    </>
  )

}

export default Navbar