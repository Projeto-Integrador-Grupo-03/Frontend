import React from 'react'
import { Link } from 'react-router-dom';


function Navbar() {
 
  return (
    <>
     <div className='w-full bg-black text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>SUSTENTA DRIVE</div>
            
            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <Link to='/sobre' className='hover:underline'>Sobre nós</Link>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar