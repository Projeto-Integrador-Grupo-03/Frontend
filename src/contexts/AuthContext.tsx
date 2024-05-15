import { createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../services/Service"
import { toastAlerta } from "../util/toastAlert"
import Produto from "../models/Produto"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
    adicionarProduto: (produto: Produto) => void
    removerProduto: (produtoId: number) => void
    limparCart: () => void
    items: Produto[]
    quantidadeItems: number
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [items, setItems] = useState<Produto[]>([])

    const quantidadeItems = items.length

    function adicionarProduto(produto: Produto) {
        toastAlerta("Produto adicionado com sucesso", 'sucesso')
        setItems(state => [...state, produto])
    }

    // Remove a quantidade de um produto especifico
    function removerProduto(produtoId: number) {
        toastAlerta("Produto removido com Sucesso", 'sucesso')

        // O findIndex() verifica se o ID do produto informado consta no Array, e pega a posição/indice desse item no Array
        const indice = items.findIndex(items => items.id === produtoId) 
        const novoCart = [...items]   // Faz uma cópia do Carrinho anterior, apenas como variavel auxiliar

        // Se o index é maior que 0, o método splice(), vai encontrar esse item no Array e o remover
        if(indice >= 0){
            novoCart.splice(indice, 1)
            setItems(novoCart)  // Atualiza o Carrinho
        }
    }

    function limparCart() {
        toastAlerta("Compra Efetuada com Sucesso", 'sucesso')
        setItems([])
    }


    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        login: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            toastAlerta("Usuário logado com sucesso", 'sucesso')
            setIsLoading(false)

        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", 'erro')
            setIsLoading(false)
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            login: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ adicionarProduto, removerProduto, limparCart, items, quantidadeItems, usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}