/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, useContext, useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlert";

function FormularioCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  
    const navigate = useNavigate();
  
    const { id } = useParams<{ id: string }>();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    async function buscarPorId(id: string) {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
      setCategoria({
        ...categoria,
        [e.target.name]: e.target.value
      })
  
      console.log(JSON.stringify(categoria))
    }
  
    async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault()
  
      if (id !== undefined) {
        try {
          await atualizar(`/categoria`, categoria, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Categoria atualizado com sucesso', 'sucesso')
          retornar()
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          } else {
            toastAlerta('Erro ao atualizar a Categoria', 'erro')
          }
  
        }
  
      } else {
        try {
          await cadastrar(`/categoria`, categoria, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
  
          toastAlerta('Categoria cadastrado com sucesso', 'sucesso')
  
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente', 'info')
            handleLogout()
          } else {
            toastAlerta('Erro ao cadastrar a Categoria', 'erro')
          }
        }
      }
  
      retornar()
    }
  
    function retornar() {
      navigate("/categorias")
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado', 'info');
        navigate('/login');
      }
    }, [token]);
  
    return (
      <div className="container flex flex-col items-center justify-center mx-auto">
        <h1 className="font-bold text-black text-4xl text-center my-8">
          {id === undefined ? 'Cadastre uma nova Categoria' : 'Editar categoria'}
        </h1>
  
        <form className="w-1/2 flex flex-col gap-4 font-bold" onSubmit={gerarNovoCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-black">Nome da categoria</label>
            <input
              type="text"
              placeholder="Nome"
              name='nome'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="text-black">Descricao da categoria</label>
            <input
              type="text"
              placeholder="Descricao"
              name='descricao'
              className="border-2 border-slate-700 rounded p-2"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <button
            className="rounded text-slate-100 bg-slate-700 hover:bg-slate-900 w-1/2 py-2 mx-auto block"
            type="submit"
          >
            {id === undefined ? 'Cadastrar' : 'Editar'}
          </button>
        </form>
      </div>
    );
  }
  
  export default FormularioCategoria;