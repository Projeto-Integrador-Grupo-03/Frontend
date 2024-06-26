import React from "react";

import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./paginas/login/Login";
import Cadastro from "./paginas/cadastro/Cadastro";
import Home from "./paginas/home/Home";
import { AuthProvider } from "./contexts/AuthContext";
import Sobre from "./paginas/sobre/Sobre";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategoria from "./components/categorias/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Perfil from "./paginas/perfil/Perfil";
import ListaProdutos from "./components/Produtos/listaProduto/ListaProduto";
import FormularioProduto from "./components/Produtos/formularioProduto/FormularioProduto";
import DeletarProduto from "./components/Produtos/deletarProduto/DeletarProduto";
import Carrinho from "./paginas/Cart/Carinho";
import "./assets/font.css";
import News from "./components/newsletter/News";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="font-sf-pro bg-white min-h-[80vh] bg-cover bg-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria"element={<FormularioCategoria />}/>
              <Route path="/editarCategoria/:id"element={<FormularioCategoria />}/>
              <Route path="/deletarCategoria/:id"element={<DeletarCategoria />}/>
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id"element={<FormularioProduto />}/>
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </div>
          <News/>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
