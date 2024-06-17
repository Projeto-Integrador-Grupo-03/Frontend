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
              <Route
                path="/cadastroCategoria"
                element={<FormularioCategoria />}
              />
              <Route
                path="/editarCategoria/:id"
                element={<FormularioCategoria />}
              />
              <Route
                path="/deletarCategoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route
                path="/editarProduto/:id"
                element={<FormularioProduto />}
              />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          </div>
          <div>
            <article className="w-full bg-sky-700 py-12 text-white flex justify-center">
              <div className="container flex flex-wrap items-center  justify-between">
                <div className="mb-6 flex flex-col grap-6">
                  <h4 className="text-3xl font-semibold sm:text-4x1">
                    Inscreva-se na nossa Newsletter 🌴
                  </h4>
                  <p className="max-w-[60ch] text-sm text-[#E7F0ED] sm:text-base">
                    Receba dicas de sustentabilidade e ofertas especiais. Faça
                    parte da mudança!
                  </p>
                </div>
                <div className="relative order-1 flex w-full max-w-[580px] flex-wrap rounded-xl bg-white text-foreground lg:order-none lg:flex-1">
                  <input
                    className="font-roboto w-full rounded-xl border border-solid border-border p-6 text-sm font-medium outline-none placeholder:font-medium placeholder:text-[#4B5563] sm:text-base"
                    type="text"
                    placeholder="Digite seu e-mail"
                  />
                  <button className="group absolute right-1 top-1 flex flex-wrap rounded-xl bg-sky-900 px-6 py-5 text-sm font-medium uppercase text-white outline-none hover:bg-sky-950 sm:text-base">
                    Inscrever
                  </button>
                </div>
              </div>
            </article>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
