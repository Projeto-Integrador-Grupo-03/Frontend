/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { toastAlerta } from "../../util/toastAlert"

function Perfil() {
  
    const navigate = useNavigate()
  
    const { usuario } = useContext(AuthContext)
  
    useEffect(() => {
      if (usuario.token === "") {
        toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
        navigate("/login")
      }
    }, [usuario.token])
  
    return (
      <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>
        <img src={usuario.foto} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto border-8 border-white relative z-10' />
        <div className="h-72 flex flex-col bg-sky-700 text-white text-2xl items-center justify-center">
          <p>Nome: {usuario.nome} </p>
          <p>Email: {usuario.login}</p>
        </div>
      </div>
    )
  }
  
  export default Perfil