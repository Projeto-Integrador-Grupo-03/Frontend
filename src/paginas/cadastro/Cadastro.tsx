/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

import { cadastrarUsuario } from '../../services/Service'
import Usuario from '../../models/Usuario'

import './Cadastro.css'
import { toastAlerta } from '../../util/toastAlert'

function Cadastro() {


    const navigate = useNavigate()


    const [isLoading, setIsLoading] = useState<boolean>(false)


    const [confirmaSenha, setConfirmaSenha] = useState<string>("")


    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        login: '',
        senha: '',
        foto: ''
    })

    useEffect(() => {
        if (usuario.id !== 0) {
            retornar()
        }
    }, [usuario])

    function retornar() {
        navigate('/login')
    }

    function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
        setConfirmaSenha(e.target.value)
    }

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({    

            ...usuario, 
            
            [e.target.name]: e.target.value
        })

    }

    async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()  

        if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
            setIsLoading(true)  

            try {   

                await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)  
                toastAlerta('Usuário cadastrado com sucesso', "Sucesso")                             

            } catch (error) {
                toastAlerta('Erro ao cadastrar o Usuário', "Erro")                               
            }

        } else {
            toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', "Erro")    
            setUsuario({ ...usuario, senha: "" })   
            setConfirmaSenha("")                   
        }

        setIsLoading(false)                         
    }

    
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold">
                <div className="fundoCadastro hidden lg:block"></div>
                <form
                    className='flex justify-center items-center flex-col w-2/3 gap-3'
                    onSubmit={cadastrarNovoUsuario} 
                >
                    <h2 className='text-slate-700 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full">
                        <label htmlFor="nome" className='text-slate-700'>Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.nome}                                                
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)} 
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="login" className='text-slate-700'>Usuario</label>
                        <input
                            type="text"
                            id="login"
                            name="login"
                            placeholder="Login"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.login}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="foto" className='text-slate-700'>Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.foto}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="senha" className='text-slate-700'>Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={usuario.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="confirmarSenha" className='text-slate-700'>Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-slate-700 rounded p-2"
                            value={confirmaSenha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button
                            className='rounded text-white bg-red-600 hover:bg-red-700 w-1/2 py-2'
                            onClick={retornar}>
                            Cancelar
                        </button>
                        <button
                            className='rounded text-white bg-slate-700 hover:bg-bg-slate-900 w-1/2 
                                       py-2 flex justify-center'
                            type='submit'>

                            {
                                
                                isLoading ? <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="24"
                                    visible={true}
                                /> :
                                    <span>Cadastrar</span>}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro